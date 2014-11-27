
<b>What is map/reduce? </b>

Lets look at an example:

Over the years I have collected many packs of playing cards. Some are complete and others have cards missing. I want to see how many cards of each suit I have.

To begin I will go through each card one at a time. When I see a card from a particular suit, for example a spade, I will "emit" by writing on a piece of paper {spade:1} Meaning I have one spade. After a while I might have something that looks as follows {spade:1,heart:1, spade:1, diamond:1, club:1,club:1}.

Once I have reached the end of the pile of cards I have finished the mapping stage. 

In order to know how many spades I have all I have to do is "reduce" my "map" by counting all the spades, hearts, diamond and clubs.

In the end i might end up with the following {spade:25, heart:26, diamond:23, club:25}
<!--break-->

<div class="gist-loader" id="ellman/9b9eee8a1a50706cb18d"></div>


