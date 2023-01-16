const $buttonAdd = document.querySelector('.button-add');
const $buttonRemove = document.querySelector('.button-remove');

const $box = document.querySelector('.box');
const $numberField = document.querySelector('.number-field');

let count = 0;

function createBoxItem() {
  const $item = document.createElement('div');
  $item.classList.add('item');
  $item.textContent = count;

  $item.addEventListener('click', function () {
    $item.remove();
  });

  $box.appendChild($item);

  //   $box.innerHTML += `<div class="item item-${count}">${count}</div>`;
  //   const $itemList = document.querySelectorAll('.item');

  //   for (const $item of $itemList) {
  //     $item.addEventListener('click', function () {
  //       $item.remove();
  //     });
  //   }
}

function removeItem(itemIndex) {
  const $itemList = document.querySelectorAll('.item');

  //   for (let i = 0; i < $itemList.length; i++) {
  //     const $item = $itemList[i];

  //     if (i === itemIndex) {
  //       $item.remove();
  //     }
  //   }

  for (const $item of $itemList) {
    if ($item.textContent === itemIndex) {
      $item.remove();
    }
  }
}

$buttonAdd.addEventListener('click', function () {
  createBoxItem();
  count++;
});

$buttonRemove.addEventListener('click', function () {
  const $inputNumber = document.querySelector('.number-field');
  removeItem($inputNumber.value);
});
