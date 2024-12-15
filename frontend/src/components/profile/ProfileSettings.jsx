const ProfileSettings = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              defaultValue="user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification Preferences
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                Email notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                Push notifications
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default ProfileSettings;
  