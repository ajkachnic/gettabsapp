import Router from 'next/router';

export default function redirect(dest, {res, status} = {}){
  if(res) {
    res.writeHead(status || 302, { Location: destination })
  } else if (destination[0] === '/' && destination[1] !== '/') {
    Router.push(destination);
  } else {
    window.location = destination;
  }
}