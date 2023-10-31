// let newPost;
const showPost = (post) => {
    post && console.log(post[0].title)
}

const getPosts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => json.filter((post)=> post.id==1)).then ((post)=> showPost(post));

//CREATING PROMISE USING ARRAOW FUNCTION

const post = {
  title: "new",
  desc: "laurem ipsum",
};

const postValid = (post) => true;
const createPost = (post) => {
  const newPromise = new Promise((resolve, reject) => {
    if (!postValid(post)) {
      const err = new Error("Post is not Valid");
      reject(err);
    }
    const newPostId = 8768;
    if (newPostId) {
      setTimeout(() => resolve(newPostId), 6000);
    }
  });
  return newPromise;
};

const proceedToAddPost = (postId) => {
  const proceed = new Promise((resolve, reject) => {
    if (postId) {
      resolve(`${postId} added successfully`);
    } else {
      const err = new Error("PostId is not valid");
    }
  });
  return proceed;
};

createPost(post)
  .then((id) => id)
  .then((id) => proceedToAddPost(id))
  .then((postInfo) => console.log(postInfo))
  .catch((err) => console.log(err.message));

//---------------------------------------------------------------------------
//CREATING PROMISE USING OLD FUNCTION DECLARATION

// const post = {
//   title: "new",
//   desc: "laurem ipsum",
// };

// const promise = createPost(post); //promise
// promise
//   .then(function (id) {
//     console.log(id);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createPost(post) {
//   const newPromise = new Promise(function (resolve, reject) {
//     if (!postValid(post)) {
//       const err = new Error("Post is not Valid");
//       reject(err);
//     }
//     const newPostId = 12345;
//     if (newPostId) {
//       setTimeout(function () {
//         resolve(newPostId);
//       }, 6000);
//     }
//   });
//   return newPromise;
// }

// function postValid(post) {
//   return false;
// }



// FUNCTION CURRYING


// const multiply = (a) => (b)=> a*b;

// const double = multiply(2);
// const a = double(5);
// const b = double(234);

// const tripple = multiply(3);
// const d = tripple(5)
// console.log(d);

// console.log( multiply(2)(4))

// PURE      FUNCTION -  OUTPUT NEVER CHANGES IF INPUT RFEMAINS SAME
// const Add = (a,b) => {
//     return a+b
//   } 
  
//   //IMPURE FUNCTION -  OUTPUT CHANGES EVEN IF INPUT RFEMAINS SAME
//   let total =0;
//   const totalAdd = (a) => {
//     return total += a;
//   }
  
//   totalAdd(5);
//   console.log(total)
//   totalAdd(5);
//   console.log(total)