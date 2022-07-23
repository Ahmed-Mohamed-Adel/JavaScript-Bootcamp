let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
"https" => Hypertext Transfer Protocol Secure must be exist

"?" => Quantifier Match Zero or One

"\/" => Escaped character Matches a "/"

":" => Character Matches a ":" character

"-" => Character Matches a "-" character

"\w" => Word, Match Any Word character

"+" => Quantifier Match One or More

"()" => Groups multiple tokens together and creating capture group

"." => Dot, Matches any character expect line breaks

"*" => Quantifier Match Zero or More

"i" => Ignore Case Insenstive
*/