// level {2}
async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];
    const userProfile = {
      user: user,
      profile: Profile,
      posts: p
    };
    return userProfile;
  }
