/*

! Navigate Funciton

The `navigate` function provided by React Router DOM v6 is a powerful tool for programmatically managing navigation in your React application.

? What does the `navigate` function do?

- The `navigate` function allows you to control the navigation programmatically, meaning you can initiate navigation actions from your JavaScript code, rather than relying solely on links. 

- Redirect the user to different routes.
- Replace the current entry in the history stack (to prevent the user from returning to the previous page via the browser back button).
- Navigate forward or backward through the browser history.

? Syntaxes of the `navigate` function
1. Navigating to a specific path:
   
   navigate('/path');
   

2. Relative navigation:
   - To navigate relative to the current route:
     
     navigate('child-route');  // Moves forward to a child route
     navigate('..');           // Moves up one level in the route hierarchy
     

3. Navigating with options:
   - To replace the current entry in the history:
     
     navigate('/path', { replace: true });
     
   - To navigate with state (which allows passing data to the route):
     
     navigate('/path', { state: { userId: 123, status: 'active' } });
     

4. Navigating forward or backward:
   - To go back one step in the history:
     
     navigate(-1);
     
   - To go forward one step in the history:
     
     navigate(1);
     

? Sending multiple parameters in the URL

- To send multiple parameters in the URL, you can structure your route paths to include these parameters as dynamic segments. For example, suppose you have a route where you want to pass both a `userId` and a `postId`:

1. Define the route with parameters:
   
   <Route path="/users/:userId/posts/:postId" element={<PostComponent />} />
   

2. Accessing parameters in the component:
   In your component, use the `useParams` hook to extract these parameters.
   
   import { useParams } from 'react-router-dom';

   function PostComponent() {
     const { userId, postId } = useParams();
     return <div>User ID: {userId}, Post ID: {postId}</div>;
   }
   

3. Navigating programmatically with parameters:
   If you need to navigate to this route programmatically and pass both `userId` and `postId`, you would do something like this:
   
   navigate(`/users/${userId}/posts/${postId}`);
   
*/