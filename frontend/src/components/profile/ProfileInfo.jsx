const ProfileInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center text-white text-4xl">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">Member since: January 2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileInfo;
  