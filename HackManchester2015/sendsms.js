

function sendsms(number,message) {
//message = "hell";
key = '6575b7a0c97c835c2125b5a59d4ad50da6f665d5';

$.ajax({
		url:  'https://api.clockworksms.com/http/send.aspx',
        data  : 'key='+ key + "&to=" + number + "&content="+ message,
        success: function(data) {
        	console.log(number);
          console.log(data);
        }
        //https://api.clockworksms.com/http/send.aspx?key=KEY&to=441234567890&content=Hello+World
      });
}

$( "#sms-button" ).click(function() {
	var message = "I+am+going"+(document.getElementById("current-location-checkbox").checked?"":("+from+"+document.getElementById("start-location").value))
								+"+to+"+document.getElementById("end-location").value+".+See you soon, hopefully!+I+will+be+there+in+about+"+approximateTime
								+".+If+I+am+not,+I+am+probably+raped,+robed,+killed+or+who+knows+what+else";
	console.log(message);
  window.alert("An SMS has been sent to your mobile phone number!");

  sendsms(document.getElementById("number-input").value,message);
})
  $( "#sms-button2" ).click(function() {
  var pickup = ["Are you a magician? Because whenever I look at you, everyone else disappears!" ,
"Are you a banana? Because I find you a-peeling" ,
"Are you a camera? Because every time I look at you, I smile." ,
"Are you a campfire? Cause you are hot and I want s'more." ,
"Are you a fruit, because Honeydew you know how fine you look right now?" ,
"Are you a parking ticket? 'Cause you've got fine written all over you." ,
"Are you African? Because you're a frican babe." ,
"Are you an interior decorator? Because when I saw you, the entire room became beautiful." ,
"Are you an orphanage? Cause I wanna give you kids." ,
"Are you from Tennessee? Because you're the only ten I see!" ,
"Are you Jewish? Cause you ISRAELI HOT." ,
"Are you lost ma'am? Because heaven is a long way from here." ,
"Are you my Appendix? Because I have a funny feeling in my stomach that makes me feel like I should take you out." ,
"Are you religious? Because you're the answer to all my prayers." ,
"Babe, your beauty makes the morning sun look like the dull glimmer of the moon." ,
"Baby I might not be Sriracha sauce but, I sure will spice up your life." ,
"Baby, if you were words on a page, you'd be what they call FINE PRINT!" ,
"Because of you, I laugh a little harder, cry a little less, and smile a lot more." ,
"Can I follow you home? Cause my parents always told me to follow my dreams." ,
"Can I have directions? [To where?] To your heart." ,
"Can I take your picture to prove to all my friends that angels do exist?" ,
"Damn, if being sexy was a crime, you'd be guilty as charged!" ,
"Did you invent the airplane? Cause you seem Wright for me." ,
"Did you read Dr. Seuss as a kid? Because green eggs and... damn!" ,
"Did you sit in a pile of sugar? Cause you have a pretty sweet ass." ,
"Do you have a Band-Aid? Because I just scraped my knee falling for you." ,
"Do you have a map? I'm getting lost in your eyes." ,
"Do you have a twin sister? Then you must be the most beautiful girl in the world!" ,
"Do you have the time? [Tells you the time] No, the time to write down my number?" ,
"Do you know what I did last night? I looked up at the stars, and matched each one with a reason why I love you." ,
"Do you know what my shirt is made of? Boyfriend material." ,
"Do you live in a corn field, cause I'm stalking you." ,
"Do you work at Dick's? Cause you're sporting the goods." ,
"Do you work at Starbucks? Because I like you a latte." ,
"Does your left eye hurt? Because you've been looking right all day." ,
"Excuse me, but I think I dropped something. MY JAW!" ,
"Excuse me, I think you have something in your eye. Oh wait, it's just a sparkle." ,
"Fascinating. I've been looking at your eyes all night long, 'cause I've never seen such dark eyes with so much light in them." ,
"For a moment I thought I had died and gone to heaven. Now I see that I am very much alive, and heaven has been brought to me." ,
"Forget about Spiderman, Superman, and Batman. I'll be your man." ,
"Have you been to the doctor lately? Cause I think you're lacking some Vitamin Me." ,
"Hello, I'm a thief, and I'm here to steal your heart." ,
"Hey baby you're so fine you make me stutter, wha-wha-what's your name?" ,
"Hey, don't frown. You never know who could be falling in love with your smile." ,
"I bet you $20 you're gonna turn me down." ,
"I don't have a library card, but do you mind if I check you out?" ,
"I like Legos, you like Legos, why don't we build a relationship?" ,
"I must be a snowflake, because I've fallen for you." ,
"I seem to have lost my phone number. Can I have yours?" ,
"I thought happiness started with an H. Why does mine start with U?" ,
"I tried my best to not feel anything for you. Guess what? I failed." ,
"I wanna live in your socks so I can be with you every step of the way." ,
"I was feeling a little off today, but you definitely turned me on." ,
"I was so enchanted by your beauty that I ran into that wall over there. So I'm going to need your name and number for insurance purposes." ,
"I was wondering if you had an extra heart mine seems to have been stolen" ,
"I will stop loving you when an apple grows from a mango tree on the 30th of February." ,
"I'm fighting the urge to make you the happiest woman on earth tonight."];
  var index = (Math.floor((Math.random() * 100)) % 57);
  var message = pickup[index];

  console.log(message);
  window.alert("You should never walk alone! It's really dangerous. Find someone to walk with! We've sent you a message which might help you!");

  sendsms(document.getElementById("number-input").value,message);
});

  

