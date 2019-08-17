# svelte-rxfire


A realtime todo list with Svelte 3 and RxFire using Firebase Firestore and Authentication.



**Features:** 

- [x] Add auth to access the todos
- [x] Retrieve all todoItems
- [x] Delete Todo
- [x] Add new Todo
- [ ] Update the design using TailwindCSS/CustomCSS

To clone and run this project: 

```
git clone //clone this project
npm i
npm i rxfire firebase rxjs

```

Next, is to Configure your firebase project and change the credentials inside the ```src/firebase.js```. 
![](https://github.com/justmatt18/svelte-rxfire/blob/master/todo-document-model.png?raw=true)


** *If you are new to firebase this will help* **

1. Authentication > Sign-in method > Enable Google
2. Database > Rules > change to ```true```
3. Database > Indexes > Add Index 
![](https://github.com/justmatt18/svelte-rxfire/blob/master/indexes.png?raw=true)


Run in your local machine

```
npm run dev // it will listen to localhost:5000
```

Hit the ![star icon](https://img.icons8.com/color/18/000000/star--v2.png) if you clone or have interest to this. ** *Thanks!* **
