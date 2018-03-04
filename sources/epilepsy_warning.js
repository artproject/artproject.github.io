$(document).ready(function(){
	$('#ew_container u').click(function(){
		$('#ew_container span:nth-child(4n + 4)').css('visibility','hidden');

		setTimeout(function(){
			$('#ew_container span:nth-child(3n + 3)').css('visibility','hidden');
		}, 100);

		setTimeout(function(){
			$('#ew_container span:nth-child(2n + 3)').css('visibility','hidden');
		}, 200);

		setTimeout(function(){
			$('#ew_container span:nth-child(n)').css('visibility','hidden');
		}, 300);

		$('img').attr('src', 'images/epilepsy_warning.gif');
		$('#ew_container').css('background-image', 'url(\'http://artproject.space/images/epilepsy_background.png\')');
	});
});
