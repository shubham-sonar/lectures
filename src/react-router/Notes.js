/*

? What are the routers..?
Ans - 
Self defined = Routers is the React library that provide us the way to navigate our SPA / Website in an efficient way

? How to use Routers..?
Ans - Follow the steps. 

1) import the BrowserRouter from 'react-dom-router' in the Index.js

2) Wrap the <App/> in the <BrowserRouter> component. So that we can include the Route functionality throughout the App. ( If we need to use the router functionality in the component then We need to wrap that specific component into the BrowserRouter Component. It is not necessary that we import it in the index.js we can also use it in any other component)
- Note that whereever we use the <Routes> component that component will refer to the '/' location. And all the further locations will add Beyond '/' will start from that component only.

3) Then in the next component which is parent for the links= import {Routes,Route} form 'react-dom-router'

4) In this home component import {NavLinks, Link} from 'react-dom-router' -- This will provide us the two components of the react router. i.e 

    Link = <Link to={'Relativeurl'}> Link 1 <Link>
    NavLink = <NavLink to={'Relativeurl'}> Link 2 <link>

    - The difference between two is that the NavLink automatically provides a toggled className="active" to our link so that we can change the css for pseudoClass active, when that link is active.
    
    - These two router components provides that when we click the link 1 or 2 we should be directed to the specified URL. 
    
    - Using this we are actually joining the Link 1 and 2 to the path and when we click this it will go to the link and then the Route will automatically render the element we have provided in Route tags
    
    - We specify the css to NavLink as follows. (any method is ok. I am using internal CSS)
    const navStyles = (isActive)=>{
        return {
            color: isActive ? Red : Blue
            decoration: isActive ? none : underline
        }
    }
    
    - Above function will be caled with a boolean value depending on the active state of the link.

5) Then create the Elements that must be displayed when we are at the specific link Eg. localHost/3000/Home.

6) Go back to the App.js component which calls the <NavBar/>. Then Wrap the multiple <Route> components in the 
~   <Routes> component. As follows.. 

    <Routes> 
        <Route path='RelativePath' element={ <ElementName /> } />
        <Route path='/' element={ <Home />} exact />
        <Route path='about' element={ <About />} />   We dont need to provide the / for relative paths
        <Route path='products' element={ <products /> } > 
            <Route index element ={ <featured /> } />
            <Route path='new' element={ <new />} />
            <Route path='featured' element={ <featured />} />
        </Route>
        <Route path='*' element= { <CustomNoRouteElement /> } />
    </Routes>

    - We can do the nested Routing when we want to display some components within the components.

    - We also need to specify the no route path so that when no route is found then some element or message is displayed to the User.

    - The react Router automatically creates the full path for the nested routes and children. Here new and featured will be automatically added, next to the products as follows.
    /products/featured or new

7) Then we go back to our elements that must be displayed when we are at specific URL and here we can make the app to programatically go to the specific link when we click, or other event is triggered, or task completed like Order placed. We provide the link that it must navigate to, when programatic event is triggerd. 
    
    - For this we use the useNavigate hook importing from the 'react-dom-router'.
    
    - This hook return the function to which we must provide the 'url as an argument. So that when we trigger that function we go to that link.
    ~    const navigate = useNavigate();
    ~    <button onClick ={ () => navigate('url') }> Click to Navigate </button>

- We can also specify that we need to go back by 1 page by writing as follow
    ~    <button onClick ={ () => navigate(-1) }> Click Back </button>

- We can also specify that we need to go completely back and exit as follow.
    ~    <button onClick ={ () => navigate(-1) }> Click Next </button>

8) Then we can go to the <Products /> element and add the links to the new and featured product components. This wil include them under the <Products /> element.
    - We need to specify where the next element must be displayed thus we import outlet and write it at a specific location.

    - Here we will write it just under the <Link> or <useLink> as <Outlet />.

9) We can specify the indexed routers when we want to render the Route Element not on new page but under the same Page by using the indexed Route.( This must be written inside the nested Route as specified above).
    <Route index element ={ <featured /> } />
    - Here path is replaced by Index means the path will be the parent path itself.

10) Dynamic Routes and Url Params. We need useParams Hook from dom-router

 */
