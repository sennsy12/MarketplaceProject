const db = require('../config/database');

class Category {
  static async create(data) {
    const query = `
      INSERT INTO categories (name, parent_id)
      VALUES ($1, $2)
      RETURNING *
    `;
    const result = await db.query(query, [data.name, data.parent_id]);
    return result.rows[0];
  }

  static async findAll() {
    const query = `
      WITH RECURSIVE category_tree AS (
        SELECT id, name, parent_id, 0 as level
        FROM categories
        WHERE parent_id IS NULL
        
        UNION ALL
        
        SELECT c.id, c.name, c.parent_id, ct.level + 1
        FROM categories c
        INNER JOIN category_tree ct ON ct.id = c.parent_id
      )
      SELECT * FROM category_tree
      ORDER BY level, name
    `;
    const result = await db.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = `
      SELECT c.*,
             p.name as parent_name,
             (
               SELECT json_agg(sub.*)
               FROM categories sub
               WHERE sub.parent_id = c.id
             ) as subcategories
      FROM categories c
      LEFT JOIN categories p ON p.id = c.parent_id
      WHERE c.id = $1
    `;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = Category; 