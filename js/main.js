let lang = 'Java';
let prog = 'coding';

var obj =
     {
        lang:"JavaScript",
        prog:"programming",
        language:function(lang)
        {
            document.writeln(lang+ ' is a popular '+this.prog+' language.');
        }
    };


obj.language();
obj.language("php");

