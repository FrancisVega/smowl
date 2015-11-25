

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
    //  Animation Configure File                                                              //
    //                                                                                        //
    ////////////////////////////////////////////////////////////////////////////////////////////


    /*
    the mit license (mit)

    copyright (c) 2015 Secuoyas

    permission is hereby granted, free of charge, to any person obtaining a copy of this
    software and associated documentation files (the "software"), to deal in the software
    without restriction, including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the software, and to permit persons
    to whom the software is furnished to do so, subject to the following conditions:

    the above copyright notice and this permission notice shall be included in all copies or
    substantial portions of the software.

    the software is provided "as is", without warranty of any kind, express or implied,
    including but not limited to the warranties of merchantability, fitness for a particular
    purpose and noninfringement. in no event shall the authors or copyright holders be liable
    for any claim, damages or other liability, whether in an action of contract, tort or
    otherwise, arising from, out of or in connection with the software or the use or other
    dealings in the software.
    */


$(function () {

    //fadeOut: function(duration, offset, triggerHook, time, reverse, pinel) {


    $$(".hero__scroll", ".hero__scroll")
        .fadeIn({ "duration": "50%", "triggerHook": "onCenter", "time": "2", "indicators": false })
          .move({ "duration": "20%", "triggerHook": "onCenter", "axy": "x", "value": "-300px" });

    $$(".a").fadeOut({"duration": "100%", "indicators": true});

/*
 *    $$(".hero__scroll", ".hero__scroll", ".hero__scroll").fadeOut("100%", 0, "onCenter", 1, true);
 *
 *
 *    $$(".a", ".hero").fadeIn(0, 0, "onCenter", 1).move("x", "100px", 0, 0, "onCenter", "from", 0.75, false, "Power3.easeInOut", 0);
 *    $$(".b", ".hero")
 *        .fadeIn(0, 0, "onCenter", 1)
 *        .move("x", "100px", 0, 0, "onCenter", "from", 0.75, false, "Power3.easeInOut", 0.2)
 *        $$(".fadeout")
 *        .fadeOut("20%", 0, 0.2, 1, true);
 *
 */

});
