import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
const middleware = (request) => {

    const path = request.nextUrl.pathname;
    // console.log(path)

    const isPublicPaths = path === '/login' || path === '/signup';
    const isAdminPaths = path === '/add-st' || path === '/browse-st';   
    const isMainPath = path === '/';

    const isDynamicPaths = request.nextUrl.pathname.startsWith('/update');

    // console.log("dynamic path" + isDynamicPaths);
    const token = request.cookies.get('token')?.value || '';
     
    // This verify that only admin can access some pages like add student update Student etc
    if(isAdminPaths && !token) {
        console.log("Cant access admin without login");
        return  NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    // This verify that all child/dynamic updating pages are not accessible to user
    else if(isDynamicPaths && !token) {
        console.log("Cant access admin without login");
        return  NextResponse.redirect(new URL('/login', request.nextUrl));
    }
    

    // This verify that if user is logged in 
    // then he will not visit login or signup page
    // If he tries then this redirect him to dashboard
    if ((isPublicPaths && token )) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // this will verify that Dashboard is shown to every user
    if (isMainPath) {
        return;
    }

    if (!isPublicPaths && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/',
        '/browse-st',
        '/login',
        '/signup',
        '/add-st',
        '/update/:path*'
    ],
}

export default middleware;