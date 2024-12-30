const ProfileInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    return (
      <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-teal-600 rounded-full flex items-center justify-center text-white text-3xl lg:text-4xl">
              {user.name.charAt(0)}
            </div>
            <div className="text-center lg:text-left">
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
  