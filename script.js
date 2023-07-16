const item = document.querySelector('.item');
        const itemNumber = document.querySelector('.item-number');
        const tax = document.querySelector('.tax');
        const alertBox = document.querySelector('.alert');
        const itemReport = document.querySelector('.item-report');
        const itemPriceShow = document.querySelector('.itempriceshow');
        const taxShow = document.querySelector('.taxshow');
        const finalTotalCost = document.querySelector('.finaltotalcost');
        const taxPercent = document.querySelector('.tax-percent');
        const itmPrice = document.querySelector('.itm-prc');
        const totalItem = document.querySelector('.total-item');

        // Alert Message
        const alertMessage = function () {
            alertBox.style.display = 'block';
            const stopTimeOut = setTimeout(() => {
                alertBox.style.display = 'none';
            }, "2000");
            function clearMessage() {
                clearTimeout(stopTimeOut);
            }
        }
        $('.check-btn').click(function () {
            const itemCost = item.value;
            const itemCount = itemNumber.value;
            const taxValue = tax.value;
            if (itemCost && itemCount && taxValue) {
                const totalItemPrice = itemCost * itemCount;
                const totalTax = totalItemPrice * taxValue / 100;
                const priceAfterTax = totalItemPrice + totalTax;
                item.value = itemNumber.value = tax.value = '';
                itemReport.style.display = 'block';
                itemPriceShow.textContent = totalItemPrice;
                totalItem.textContent = itemCount;
                itmPrice.textContent = itemCost;
                taxPercent.textContent = taxValue;
                taxShow.textContent = totalTax.toFixed(2);
                finalTotalCost.textContent = priceAfterTax.toFixed(2);
            } else {
                alertMessage();
            }
        });