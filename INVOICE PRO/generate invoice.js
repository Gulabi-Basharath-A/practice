// Function to generate the invoice
function generateInvoice() {
    const customerName = $("#customerName").val();
    const invoiceDate = $("#invoiceDate").val();
    const gstRate = parseFloat($("#gstRate").val()) || 0;
    let totalAmount = 0;

    $("tr[id^='itemRow']").each(function () {
        const quantity = parseFloat($(this).find(".quantity").val()) || 0;
        const unitPrice = parseFloat($(this).find(".unitPrice").val()) || 0;
        totalAmount += quantity * unitPrice;
    });

    const gstAmount = (totalAmount * gstRate) / 100;
    const totalAmountWithGST = totalAmount + gstAmount;

    const invoiceContent = `
        <html>
        <head>
            <title>Invoice Slip</title>
            <style>/* CSS styles */</style>
        </head>
        <body>
            <h2>Invoice Slip</h2>
            <p><strong>Customer Name:</strong> ${customerName}</p>
            <p><strong>Date and Time:</strong> ${invoiceDate}</p>
            <table>${generateInvoiceItems()}</table>
            <p class="total">Total Amount: ${totalAmount.toFixed(2)}</p>
            <p class="total">GST Amount (${gstRate}%): ${gstAmount.toFixed(2)}</p>
            <p class="total">Total Amount (incl. GST): ${totalAmountWithGST.toFixed(2)}</p>
        </body>
    </html>`;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(invoiceContent);
    printWindow.document.close();
}

// Function to generate invoice items HTML
function generateInvoiceItems() {
    let itemsHTML = "";
    $("tr[id^='itemRow']").each(function () {
        const description = $(this).find("td:eq(0) input").val();
        const quantity = $(this).find("td:eq(1) input").val();
        const unitPrice = $(this).find("td:eq(2) input").val();
        const totalItemPrice = $(this).find("td:eq(3) input").val();

        itemsHTML += `<tr><td>${description}</td><td>${quantity}</td><td>${unitPrice}</td><td>${totalItemPrice}</td></tr>`;
    });
    return itemsHTML;
}

// Add event listener for "Generate Invoice" button click
$("#generateInvoiceBtn").click(generateInvoice);
