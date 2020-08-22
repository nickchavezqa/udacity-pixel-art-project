function makeGrid(x, y) {
  $('tr').remove();

  // Your code goes here!
  for (var i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var n = 1; n <= y; n++) {
      $('#table' + i).append('<td></td>');
    }
  }
}

// When size is submitted by the user, call makeGrid()
var size, width, color;

// Select size input
$('#sizePicker').on('submit', function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

//Apply color to pixel
$('#pixelCanvas').on('click', 'td', function() {
  color = $('#colorPicker').val();
  
  if ($(this).attr('style')) {
    $(this).removeAttr('style')
  } else {
    $(this).attr('style', 'background-color:' + color);
  }
})
