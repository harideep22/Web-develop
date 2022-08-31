fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((data) => {
    return data.json();
}).then((objectdata) => {
    console.log(objectdata[0].name);
    let tableData = "";
    objectdata.map((values) => {
        tableData += `
        <tr>
        <td>
            <input type="checkbox" id="select_all">
        </td>
        <td>${values.name}
        </td>
        <td>${values.email}
        </td>
        <td>${values.role}
        </td>
        <td>
        <button type="button_1" class="btn btn-info" value="Update" onclick="edit(this)">Edit</button>
        <button type="button_2" class="btn btn-danger" onclick="SomeDeleteRowFunction(this)">Delete</button>
        </td>
    </tr>`;
    })
    document.getElementById("table_body").
        innerHTML = tableData
})

function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    var p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}


