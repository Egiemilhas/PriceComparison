function updateAutomatedValues() {
  const assetType = document.getElementById('asset-type').value;
  const assetPrice = parseFloat(document.getElementById('asset-price').value);

  if (isNaN(assetPrice)) {
    alert('Masukkan angka nya Lurrrr');
    return;
  }

  let executedPrice, mt5Price;

  if (assetType === 'btc') {
    executedPrice = assetPrice - 17;
    mt5Price = assetPrice - 25;
  } else if (assetType === 'gold') {
    mt5Price = assetPrice - 3;
    executedPrice = mt5Price - 2;
  }

  let result = '';

  result += `Harga di MT5: ${mt5Price.toFixed(0)}<br>`;
  result += `Harga Tereksekusi: ${executedPrice.toFixed(0)}<br>`;

  document.getElementById('result').innerHTML = result;
}
