var quotationData = [];

function addItem() {
    var d = $("#newItemDescription").val();
    var u = $("#newItemPPU").val();
    var q = $("#newItemQty").val();
    console.debug(d, u, q);
    quotationData.push({
        description: d,
        quantity: Number.parseFloat(q),
        unitPrice: Number.parseFloat(u)
    });
    $('#exampleModal').modal('hide');
    renderTable();
}

function renderTable() {
    var data = quotationData;
    var subTotal = 0;
    data.forEach((e) => {
        subTotal = subTotal + (e.unitPrice * e.quantity);
    });
    var vat = (subTotal * .07).toFixed(2);
    var total = subTotal * 1.07;

    console.log('subTotal', subTotal);
    $("#subTotal").html("" + subTotal);
    $("#vat").html("" + vat);
    $("#total").html("" + total);

    var dataRows = data.map((e, i) => {
        let amount = e.quantity * e.unitPrice;
        return `<tr class="data-row">
            <td class="text-center">${e.quantity}</td>
            <td class="data">
                <button onclick="deleteItem(${i})">X</button>
                ${e.description}
            </td>
            <td class="text-right">${e.unitPrice.toFixed(2)}</td>
            <td class="text-right">${amount.toFixed(2)}</td>
        </tr>`;
    });

    $(".data-row").remove();

    // Insert into the table
    dataRows.forEach((r) => {
        $('#quotationTable tbody').before(r);
    });

    // Update date and time
    var now = new Date();
    var formattedDate = now.toLocaleDateString();
    var formattedTime = now.toLocaleTimeString();
    $('#quotationDate').html(`${formattedDate} ${formattedTime}`);
}

function deleteItem(index) {
    quotationData.splice(index, 1);
    renderTable();
}

$(document).ready(function () {
    $.getJSON('data/data.json', data => {
        // render the table
        quotationData = data;

        renderTable();
    });
});
