export default class Ajax {
//   /**
//    * Loads a JSON-encoded data from the server using a GET HTTP request.
//    *
//    * Reference: http://ondrek.me/post/84819614785/how-to-get-json-xml-in-jquery-and-in-vanilla
//    * 
//    * @class getJSON
//    * @constructor
//    * @param {String}   url     The URL to which the request is sent.
//    * @param {Function} success The callback function that is executed if the 
//    *                           request succeeds.
//    */
//   static getJSON(url, success) {
//     const xmlhttp = new XMLHttpRequest();
//     xmlhttp.overrideMimeType('application/json');
//     xmlhttp.onreadystatechange = () => {
//       ready = (xmlhttp.readyState === 4 && xmlhttp.status === 200);
//       const data = (ready ? xmlhttp.responseText : false);

//       if (data && Function.isFunction(success)) {
//         success(JSON.parse(data));
//       }
//     };
//     xmlhttp.open('GET', url, true);
//     xmlhttp.send();


// // XMLHttpRequest wrapper using callbacks
// let request = obj => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(obj.method || "GET", obj.url);
//         if (obj.headers) {
//             Object.keys(obj.headers).forEach(key => {
//                 xhr.setRequestHeader(key, obj.headers[key]);
//             });
//         }
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(xhr.statusText);
//             }
//         };
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send(obj.body);
//     });
// };

// request({url: "employees.json"})
//     .then(data => {
//         let employees = JSON.parse(data);
//         let html = "";
//         employees.forEach(employee => {
//             html += `
//                 <div>
//                     <img src='${employee.picture}'/>
//                     <div>
//                         ${employee.firstName} ${employee.lastName}
//                         <p>${employee.phone}</p>
//                     </div>
//                 </div>`;
//         });
//         document.getElementById("list").innerHTML = html;
//     })
//     .catch(error => {
//         console.log(error);
//     });

//   }
}
