import Swal from 'sweetalert2';
import fetchIso from 'isomorphic-unfetch';

export default function fetch(method, url, data, options= {}, noDefaultOpts) {
  let opts = options;

  if(noDefaultOpts !== true) {
    opts.headers = {
      'Content-Type': 'application/json',
      ...opts.headers,
    };
  };

  return fetchIso(url, {
    ...opts,
    method,
    body: data
    ? opts && opts.headers && opts.headers['Content-Type'] === 'application/json'
      ? JSON.stringify(data)
      : data
    : null,
  }).then(res => res.json())
  .then(json => {
    let isErr = json.ok === false;
    Swal.fire({
      toast: true,
      showConfirmButton: false,
      position:'bottom-end',
      timer: 6000,
      title: json.message || (isErr ? 'An error has occured' : 'Success!'),
      icon: isErr ? 'error' : 'success',
    })
    return json;
  })
}

fetch.get = fetch.bind(this, 'GET')
fetch.delete = fetch.bind(this, 'DELETE');
fetch.post = fetch.bind(this, 'POST');
fetch.put = fetch.bind(this, 'PUT');
fetch.patch = fetch.bind(this, 'PATCH');

