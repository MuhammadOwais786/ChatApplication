function loginWithFB(){
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // alert(user)
        // ...

        firebase.firestore().collection('users').doc().set({
          displayName:user.displayName,
          email:user.email,
          phoneNumber:user.phoneNumber,
          photoURL:user.photoURL,
          uid:user.uid
        }).then(function(){
          alert("OK RECEiveD")
        })
        .catch(function(error){
          alert(error)
        })


        // firebase.database().ref('users/' + userId).set({
        //   username: name,
        //   email: email,
        //   profile_picture : imageUrl
        // }, function(error) {
        //   if (error) {
        //     console.log("Data ==========>    The write failed...")
        //     // The write failed...
        //   } else {
        //     console.log("Data ==========>    Data saved successfully")
        //     // Data saved successfully!
        //   }
        // });

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(error)
      });

}
/*===================================================================================================
                                      Conversation List
=====================================================================================================*/

// firebase.database().ref('users/' + userId).set({
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// }, function(error) {
//   if (error) {
//     // The write failed...
//   } else {
//     // Data saved successfully!
//   }
// });
