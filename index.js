var art='           :::!~!!!!!:.\n\
                  .xUHWH!! !!?M88WHX:.\n\
                .X*#M@$!!  !X!M$$$$$$WWx:.\n\
               :!!!!!!?H! :!$!$$$$$$$$$$8X:\n\
              !!~  ~:~!! :~!$!#$$$$$$$$$$8X:\n\
             :!~::!H!<   ~.U$X!?R$$$$$$$$MM!\n\
             ~!~!!!!~~ .:XW$$$U!!?$$$$$$RMM!\n\
               !:~~~ .:!M"T#$$$$WX??#MRRMMM!\n\
               ~?WuxiW*`   `"#$$$$8!!!!??!!!\n\
             :X- M$$$$       `"T#$T~!8$WUXU~\n\
            :%`  ~#$$$m:        ~!~ ?$$$$$$\n\
          :!`.-   ~T$$$$8xx.  .xWW- ~""##*"\n\
.....   -~~:<` !    ~?T#$$@@W@*?$$      /`\n\
W$@@M!!! .!~~ !!     .:XUW$W!~ `"~:    :\n\
#"~~`.:x%`!!  !H:   !WM$$$$Ti.: .!WUn+!`\n\
:::~:!!`:X~ .: ?H.!u "$$$B$$$!W:U!T$$M~\n\
.~~   :X@!.-~   ?@WTWo("*$$$W$TH$! `\n\
Wi.~!X$?!-~    : ?$$$B$Wu("**$RM!\n\
$R@i.~~ !     :   ~$$$$$B$$en:``\n\
?MXT@Wx.~    :     ~"##*$$$$M~\n\
\n\
\n\
Woooah Partner, what are ya lookin for here?\n\
🕵️ \n\
';

function getCharacters(art)
{
	var i = art.length;
	// used to track the time at which the letter should print regardless of the current i (which is the character position including whitespace)
	var i_letter = 0;
	var s = ''; // string of whitespace
	var characters = [];
	do
	{
		i = (i + 1) % art.length;
		var c = art[i];

		var isWhitespace = /\s/.test(c);
		if (isWhitespace)
		{
			s += c;
			continue; // don't print the whitespace yet
		}
		else
		{
			if (s.length > 0)
			{
				c = s + c; // be sure to include the character currently being parsed
				s = '';
			}

			i_letter = (i_letter + 1) % art.length;

			characters.push(c);
		}
	}
	while(i);

	return characters;
}

var characters = getCharacters(art);

var output = '';
function printCharacterByIndex(characters, index, delay)
{
	if (characters[index] === undefined) return;

	output += characters[index];
	console.clear();
	console.log(output)

	window.setTimeout(printCharacterByIndex.bind(null, characters, index + 1, delay), delay);
}

function firstStick(){
  $(window).scroll( () => {
    if ($(window).scrollTop() > 140){
      $('#headshot').fadeOut('slow')
    } else {
      $('#headshot').fadeIn('slow')
    }
  })
}

$( document ).ready(function() {
  console.clear();
  printCharacterByIndex(getCharacters(art), 0, 0);
   firstStick()
})
