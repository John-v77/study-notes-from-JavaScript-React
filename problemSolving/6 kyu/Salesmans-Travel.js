/*

Title: Salesman's Travel
Source: CodeWars.com

A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
Note for Elixir:
In Elixir the empty addresses' input is an empty list, not an empty string.

Note:
You can see a few addresses and zipcodes in the test cases.
*/

// Solution:
function travel(r, zipcode) {
  if (!zipcode && !r) return "";

  const arrList = r.split(",");
  let zipCodeFound = false;
  let obj1 = {};

  arrList.forEach((el) => {
    let newZip = el.slice(-8);

    if (newZip !== zipcode) return;

    zipCodeFound = true;
    let arr1 = el.split(" ");
    let addNo = arr1[0];
    let address = arr1.slice(1, -2).join(" ");

    if (obj1[newZip] === undefined) {
      obj1[newZip] = [[address], [addNo]];
      return;
    }

    if (obj1[newZip][0] === address) {
      obj1[newZip][1].push(addNo);
    } else {
      obj1[newZip][0].push(address);
      obj1[newZip][1].push(addNo);
    }
  });

  if (!zipCodeFound) return `${zipcode}:/`;

  const address = obj1[zipcode][0].join(",");
  const addNo = obj1[zipcode][1].join(",");
  const result = zipcode + ":" + address + "/" + addNo;

  return result;
}
