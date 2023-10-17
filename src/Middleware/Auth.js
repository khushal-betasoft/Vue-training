export default (to, from, next)=>{
        const isAuthenticated = localStorage.getItem('isLogin');
        if (isAuthenticated) {
            next('/register');
        }
        else {
            from();
        }
    }