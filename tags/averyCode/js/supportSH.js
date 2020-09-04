$(function()
  {
    
    // Listen for click on toggle checkbox
    $('#select-all').click(function(event) {   
        if(this.checked) {
            // Iterate each checkbox
            $(':checkbox').each(function() {
                this.checked = true;                        
            });
        }
    });
    
    $('#display').hide();

    
    $('.c').change(dispExtra);
    
    
    
        $(document).on('click', '#continue', function ()
        {
          $('#display').show();
          $('#mainT').hide();

          dispExtra();  

        });
        
        $(document).on('click', '#review', function ()
        {
          $('#display').hide();
          $('#mainT').show();
            

        });
        
        function dispExtra()
        {
          //c1r1
          if($("#dc1r1Check").is(':checked'))
            {
              $('#c1r1').show();
              var n101 = $('#dnc1r1').val();
              var p101 = $('#dpc1r1').val();
              $('#nc1r1').text(n101);
              $('#pc1r1').text("$" + p101);
            }
            else
            {
              $('#c1r1').hide();
            }
            //c2r1
          if($("#dc2r1Check").is(':checked'))
            {
              $('#c2r1').show();
              var n201 = $('#dnc2r1').val();
              var p201 = $('#dpc2r1').val();
              $('#nc2r1').text(n201);
              $('#pc2r1').text("$" + p201);
            }
            else
            {
              $('#c2r1').hide();
            }
            //c3r1
          if($("#dc3r1Check").is(':checked'))
            {
              $('#c3r1').show();
              var n301 = $('#dnc3r1').val();
              var p301 = $('#dpc3r1').val();
              $('#nc3r1').text(n301);
              $('#pc3r1').text("$" + p301);
            }
            else
            {
              $('#c3r1').hide();
            }
            //c4r1
          if($("#dc4r1Check").is(':checked'))
            {
              $('#c4r1').show();
              var n401 = $('#dnc4r1').val();
              var p401 = $('#dpc4r1').val();
              $('#nc4r1').text(n401);
              $('#pc4r1').text("$" + p401);
            }
            else
            {
              $('#c4r1').hide();
            }
            //c1r2
          if($("#dc1r2Check").is(':checked'))
            {
              $('#c1r2').show();
              var n102 = $('#dnc1r2').val();
              var p102 = $('#dpc1r2').val();
              $('#nc1r2').text(n102);
              $('#pc1r2').text("$" + p102);
            }
            else
            {
              $('#c1r2').hide();
            }
            //c2r2
          if($("#dc2r2Check").is(':checked'))
            {
              $('#c2r2').show();
              var n202 = $('#dnc2r2').val();
              var p202 = $('#dpc2r2').val();
              $('#nc2r2').text(n202);
              $('#pc2r2').text("$" + p202);
            }
            else
            {
              $('#c2r2').hide();
            }
            //c3r2
          if($("#dc3r2Check").is(':checked'))
            {
              $('#c3r2').show();
              var n302 = $('#dnc3r2').val();
              var p302 = $('#dpc3r2').val();
              $('#nc3r2').text(n302);
              $('#pc3r2').text("$" + p302);
            }
            else
            {
              $('#c3r2').hide();
            }
            //c4r2
          if($("#dc4r2Check").is(':checked'))
            {
              $('#c4r2').show();
              var n402 = $('#dnc4r2').val();
              var p402 = $('#dpc4r2').val();
              $('#nc4r2').text(n402);
              $('#pc4r2').text("$" + p402);
            }
            else
            {
              $('#c4r2').hide();
            }
            //c1r3
          if($("#dc1r3Check").is(':checked'))
            {
              $('#c1r3').show();
              var n103 = $('#dnc1r3').val();
              var p103 = $('#dpc1r3').val();
              $('#nc1r3').text(n103);
              $('#pc1r3').text("$" + p103);
            }
            else
            {
              $('#c1r3').hide();
            }
            //c2r3
          if($("#dc2r3Check").is(':checked'))
            {
              $('#c2r3').show();
              var n203 = $('#dnc2r3').val();
              var p203 = $('#dpc2r3').val();
              $('#nc2r3').text(n203);
              $('#pc2r3').text("$" + p203);
            }
            else
            {
              $('#c2r3').hide();
            }
            //c3r3
          if($("#dc3r3Check").is(':checked'))
            {
              $('#c3r3').show();
              var n303 = $('#dnc3r3').val();
              var p303 = $('#dpc3r3').val();
              $('#nc3r3').text(n303);
              $('#pc3r3').text("$" + p303);
            }
            else
            {
              $('#c3r3').hide();
            }
            //c4r3
          if($("#dc4r3Check").is(':checked'))
            {
              $('#c4r3').show();
              var n403 = $('#dnc4r3').val();
              var p403 = $('#dpc4r3').val();
              $('#nc4r3').text(n403);
              $('#pc4r3').text("$" + p403);
            }
            else
            {
              $('#c4r3').hide();
            }
            //c1r4
          if($("#dc1r4Check").is(':checked'))
            {
              $('#c1r4').show();
              var n104 = $('#dnc1r4').val();
              var p104 = $('#dpc1r4').val();
              $('#nc1r4').text(n104);
              $('#pc1r4').text("$" + p104);
            }
            else
            {
              $('#c1r4').hide();
            }
            //c2r4
          if($("#dc2r4Check").is(':checked'))
            {
              $('#c2r4').show();
              var n204 = $('#dnc2r4').val();
              var p204 = $('#dpc2r4').val();
              $('#nc2r4').text(n204);
              $('#pc2r4').text("$" + p204);
            }
            else
            {
              $('#c2r4').hide();
            }
            //c3r4
          if($("#dc3r4Check").is(':checked'))
            {
              $('#c3r4').show();
              var n304 = $('#dnc3r4').val();
              var p304 = $('#dpc3r4').val();
              $('#nc3r4').text(n304);
              $('#pc3r4').text("$" + p304);
            }
            else
            {
              $('#c3r4').hide();
            }
            //c4r4
          if($("#dc4r4Check").is(':checked'))
            {
              $('#c4r4').show();
              var n404 = $('#dnc4r4').val();
              var p404 = $('#dpc4r4').val();
              $('#nc4r4').text(n404);
              $('#pc4r4').text("$" + p404);
            }
            else
            {
              $('#c4r4').hide();
            }
            //c1r5
          if($("#dc1r5Check").is(':checked'))
            {
              $('#c1r5').show();
              var n105 = $('#dnc1r5').val();
              var p105 = $('#dpc1r5').val();
              $('#nc1r5').text(n105);
              $('#pc1r5').text("$" + p105);
            }
            else
            {
              $('#c1r5').hide();
            }
            //c2r5
          if($("#dc2r5Check").is(':checked'))
            {
              $('#c2r5').show();
              var n205 = $('#dnc2r5').val();
              var p205 = $('#dpc2r5').val();
              $('#nc2r5').text(n205);
              $('#pc2r5').text("$" + p205);
            }
            else
            {
              $('#c2r5').hide();
            }
            //c3r5
          if($("#dc3r5Check").is(':checked'))
            {
              $('#c3r5').show();
              var n305 = $('#dnc3r5').val();
              var p305 = $('#dpc3r5').val();
              $('#nc3r5').text(n305);
              $('#pc3r5').text("$" + p305);
            }
            else
            {
              $('#c3r5').hide();
            }
            //c4r5
          if($("#dc4r5Check").is(':checked'))
            {
              $('#c4r5').show();
              var n405 = $('#dnc4r5').val();
              var p405 = $('#dpc4r5').val();
              $('#nc4r5').text(n405);
              $('#pc4r5').text("$" + p405);
            }
            else
            {
              $('#c4r5').hide();
            }
            //c1r6
          if($("#dc1r6Check").is(':checked'))
            {
              $('#c1r6').show();
              var n106 = $('#dnc1r6').val();
              var p106 = $('#dpc1r6').val();
              $('#nc1r6').text(n106);
              $('#pc1r6').text("$" + p106);
            }
            else
            {
              $('#c1r6').hide();
            }
            //c2r6
          if($("#dc2r6Check").is(':checked'))
            {
              $('#c2r6').show();
              var n206 = $('#dnc2r6').val();
              var p206 = $('#dpc2r6').val();
              $('#nc2r6').text(n206);
              $('#pc2r6').text("$" + p206);
            }
            else
            {
              $('#c2r6').hide();
            }
            //c3r6
          if($("#dc3r6Check").is(':checked'))
            {
              $('#c3r6').show();
              var n306 = $('#dnc3r6').val();
              var p306 = $('#dpc3r6').val();
              $('#nc3r6').text(n306);
              $('#pc3r6').text("$" + p306);
            }
            else
            {
              $('#c3r6').hide();
            }
            //c4r6
          if($("#dc4r6Check").is(':checked'))
            {
              $('#c4r6').show();
              var n406 = $('#dnc4r6').val();
              var p406 = $('#dpc4r6').val();
              $('#nc4r6').text(n406);
              $('#pc4r6').text("$" + p406);
            }
            else
            {
              $('#c4r6').hide();
            }
            //c1r7
          if($("#dc1r7Check").is(':checked'))
            {
              $('#c1r7').show();
              var n107 = $('#dnc1r7').val();
              var p107 = $('#dpc1r7').val();
              $('#nc1r7').text(n107);
              $('#pc1r7').text("$" + p107);
            }
            else
            {
              $('#c1r7').hide();
            }
            //c2r7
          if($("#dc2r7Check").is(':checked'))
            {
              $('#c2r7').show();
              var n207 = $('#dnc2r7').val();
              var p207 = $('#dpc2r7').val();
              $('#nc2r7').text(n207);
              $('#pc2r7').text("$" + p207);
            }
            else
            {
              $('#c2r7').hide();
            }
            //c3r7
          if($("#dc3r7Check").is(':checked'))
            {
              $('#c3r7').show();
              var n307 = $('#dnc3r7').val();
              var p307 = $('#dpc3r7').val();
              $('#nc3r7').text(n307);
              $('#pc3r7').text("$" + p307);
            }
            else
            {
              $('#c3r7').hide();
            }
            //c4r7
          if($("#dc4r7Check").is(':checked'))
            {
              $('#c4r7').show();
              var n407 = $('#dnc4r7').val();
              var p407 = $('#dpc4r7').val();
              $('#nc4r7').text(n407);
              $('#pc4r7').text("$" + p407);
            }
            else
            {
              $('#c4r7').hide();
            }
            //c1r8
          if($("#dc1r8Check").is(':checked'))
            {
              $('#c1r8').show();
              var n108 = $('#dnc1r8').val();
              var p108 = $('#dpc1r8').val();
              $('#nc1r8').text(n108);
              $('#pc1r8').text("$" + p108);
            }
            else
            {
              $('#c1r8').hide();
            }
            //c2r8
          if($("#dc2r8Check").is(':checked'))
            {
              $('#c2r8').show();
              var n208 = $('#dnc2r8').val();
              var p208 = $('#dpc2r8').val();
              $('#nc2r8').text(n208);
              $('#pc2r8').text("$" + p208);
            }
            else
            {
              $('#c2r8').hide();
            }
            //c3r8
          if($("#dc3r8Check").is(':checked'))
            {
              $('#c3r8').show();
              var n308 = $('#dnc3r8').val();
              var p308 = $('#dpc3r8').val();
              $('#nc3r8').text(n308);
              $('#pc3r8').text("$" + p308);
            }
            else
            {
              $('#c3r8').hide();
            }
            //c4r8
          if($("#dc4r8Check").is(':checked'))
            {
              $('#c4r8').show();
              var n408 = $('#dnc4r8').val();
              var p408 = $('#dpc4r8').val();
              $('#nc4r8').text(n408);
              $('#pc4r8').text("$" + p408);
            }
            else
            {
              $('#c4r8').hide();
            }
            //c1r9
          if($("#dc1r9Check").is(':checked'))
            {
              $('#c1r9').show();
              var n109 = $('#dnc1r9').val();
              var p109 = $('#dpc1r9').val();
              $('#nc1r9').text(n109);
              $('#pc1r9').text("$" + p109);
            }
            else
            {
              $('#c1r9').hide();
            }
            //c2r9
          if($("#dc2r9Check").is(':checked'))
            {
              $('#c2r9').show();
              var n209 = $('#dnc2r9').val();
              var p209 = $('#dpc2r9').val();
              $('#nc2r9').text(n209);
              $('#pc2r9').text("$" + p209);
            }
            else
            {
              $('#c2r9').hide();
            }
            //c3r9
          if($("#dc3r9Check").is(':checked'))
            {
              $('#c3r9').show();
              var n309 = $('#dnc3r9').val();
              var p309 = $('#dpc3r9').val();
              $('#nc3r9').text(n309);
              $('#pc3r9').text("$" + p309);
            }
            else
            {
              $('#c3r9').hide();
            }
            //c4r9
          if($("#dc4r9Check").is(':checked'))
            {
              $('#c4r9').show();
              var n409 = $('#dnc4r9').val();
              var p409 = $('#dpc4r9').val();
              $('#nc4r9').text(n409);
              $('#pc4r9').text("$" + p409);
            }
            else
            {
              $('#c4r9').hide();
            }
            //c1r10
          if($("#dc1r10Check").is(':checked'))
            {
              $('#c1r10').show();
              var n110 = $('#dnc1r10').val();
              var p110 = $('#dpc1r10').val();
              $('#nc1r10').text(n110);
              $('#pc1r10').text("$" + p110);
            }
            else
            {
              $('#c1r10').hide();
            }
            //c2r10
          if($("#dc2r10Check").is(':checked'))
            {
              $('#c2r10').show();
              var n210 = $('#dnc2r10').val();
              var p210 = $('#dpc2r10').val();
              $('#nc2r10').text(n210);
              $('#pc2r10').text("$" + p210);
            }
            else
            {
              $('#c2r10').hide();
            }
            //c3r10
          if($("#dc3r10Check").is(':checked'))
            {
              $('#c3r10').show();
              var n310 = $('#dnc3r10').val();
              var p310 = $('#dpc3r10').val();
              $('#nc3r10').text(n310);
              $('#pc3r10').text("$" + p310);
            }
            else
            {
              $('#c3r10').hide();
            }
            //c4r10
          if($("#dc4r10Check").is(':checked'))
            {
              $('#c4r10').show();
              var n410 = $('#dnc4r10').val();
              var p410 = $('#dpc4r10').val();
              $('#nc4r10').text(n410);
              $('#pc4r10').text("$" + p410);
            }
            else
            {
              $('#c4r10').hide();
            }
            //c1r11
          if($("#dc1r11Check").is(':checked'))
            {
              $('#c1r11').show();
              var n111 = $('#dnc1r11').val();
              var p111 = $('#dpc1r11').val();
              $('#nc1r11').text(n111);
              $('#pc1r11').text("$" + p111);
            }
            else
            {
              $('#c1r11').hide();
            }
            //c2r11
          if($("#dc2r11Check").is(':checked'))
            {
              $('#c2r11').show();
              var n211 = $('#dnc2r11').val();
              var p211 = $('#dpc2r11').val();
              $('#nc2r11').text(n211);
              $('#pc2r11').text("$" + p211);
            }
            else
            {
              $('#c2r11').hide();
            }
            //c3r11
          if($("#dc3r11Check").is(':checked'))
            {
              $('#c3r11').show();
              var n311 = $('#dnc3r11').val();
              var p311 = $('#dpc3r11').val();
              $('#nc3r11').text(n311);
              $('#pc3r11').text("$" + p311);
            }
            else
            {
              $('#c3r11').hide();
            }
            //c4r11
          if($("#dc4r11Check").is(':checked'))
            {
              $('#c4r11').show();
              var n411 = $('#dnc4r11').val();
              var p411 = $('#dpc4r11').val();
              $('#nc4r11').text(n411);
              $('#pc4r11').text("$" + p411);
            }
            else
            {
              $('#c4r11').hide();
            }
            //c1r12
          if($("#dc1r12Check").is(':checked'))
            {
              $('#c1r12').show();
              var n112 = $('#dnc1r12').val();
              var p112 = $('#dpc1r12').val();
              $('#nc1r12').text(n112);
              $('#pc1r12').text("$" + p112);
            }
            else
            {
              $('#c1r12').hide();
            }
            //c2r12
          if($("#dc2r12Check").is(':checked'))
            {
              $('#c2r12').show();
              var n212 = $('#dnc2r12').val();
              var p212 = $('#dpc2r12').val();
              $('#nc2r12').text(n212);
              $('#pc2r12').text("$" + p212);
            }
            else
            {
              $('#c2r12').hide();
            }
            //c3r12
          if($("#dc3r12Check").is(':checked'))
            {
              $('#c3r12').show();
              var n312 = $('#dnc3r12').val();
              var p312 = $('#dpc3r12').val();
              $('#nc3r12').text(n312);
              $('#pc3r12').text("$" + p312);
            }
            else
            {
              $('#c3r12').hide();
            }
            //c4r12
          if($("#dc4r12Check").is(':checked'))
            {
              $('#c4r12').show();
              var n412 = $('#dnc4r12').val();
              var p412 = $('#dpc4r12').val();
              $('#nc4r12').text(n412);
              $('#pc4r12').text("$" + p412);
            }
            else
            {
              $('#c4r12').hide();
            }
            //c1r13
          if($("#dc1r13Check").is(':checked'))
            {
              $('#c1r13').show();
              var n113 = $('#dnc1r13').val();
              var p113 = $('#dpc1r13').val();
              $('#nc1r13').text(n113);
              $('#pc1r13').text("$" + p113);
            }
            else
            {
              $('#c1r13').hide();
            }
            //c2r13
          if($("#dc2r13Check").is(':checked'))
            {
              $('#c2r13').show();
              var n213 = $('#dnc2r13').val();
              var p213 = $('#dpc2r13').val();
              $('#nc2r13').text(n213);
              $('#pc2r13').text("$" + p213);
            }
            else
            {
              $('#c2r13').hide();
            }
            //c3r13
          if($("#dc3r13Check").is(':checked'))
            {
              $('#c3r13').show();
              var n313 = $('#dnc3r13').val();
              var p313 = $('#dpc3r13').val();
              $('#nc3r13').text(n313);
              $('#pc3r13').text("$" + p313);
            }
            else
            {
              $('#c3r13').hide();
            }
            //c4r13
          if($("#dc4r13Check").is(':checked'))
            {
              $('#c4r13').show();
              var n413 = $('#dnc4r13').val();
              var p413 = $('#dpc4r13').val();
              $('#nc4r13').text(n413);
              $('#pc4r13').text("$" + p413);
            }
            else
            {
              $('#c4r13').hide();
            }
            //c1r14
          if($("#dc1r14Check").is(':checked'))
            {
              $('#c1r14').show();
              var n114 = $('#dnc1r14').val();
              var p114 = $('#dpc1r14').val();
              $('#nc1r14').text(n114);
              $('#pc1r14').text("$" + p114);
            }
            else
            {
              $('#c1r14').hide();
            }
            //c2r14
          if($("#dc2r14Check").is(':checked'))
            {
              $('#c2r14').show();
              var n214 = $('#dnc2r14').val();
              var p214 = $('#dpc2r14').val();
              $('#nc2r14').text(n214);
              $('#pc2r14').text("$" + p214);
            }
            else
            {
              $('#c2r14').hide();
            }
            //c3r14
          if($("#dc3r14Check").is(':checked'))
            {
              $('#c3r14').show();
              var n314 = $('#dnc3r14').val();
              var p314 = $('#dpc3r14').val();
              $('#nc3r14').text(n314);
              $('#pc3r14').text("$" + p314);
            }
            else
            {
              $('#c3r14').hide();
            }
            //c4r14
          if($("#dc4r14Check").is(':checked'))
            {
              $('#c4r14').show();
              var n414 = $('#dnc4r14').val();
              var p414 = $('#dpc4r14').val();
              $('#nc4r14').text(n414);
              $('#pc4r14').text("$" + p414);
            }
            else
            {
              $('#c4r14').hide();
            }
            //c1r15
          if($("#dc1r15Check").is(':checked'))
            {
              $('#c1r15').show();
              var n115 = $('#dnc1r15').val();
              var p115 = $('#dpc1r15').val();
              $('#nc1r15').text(n115);
              $('#pc1r15').text("$" + p115);
            }
            else
            {
              $('#c1r15').hide();
            }
            //c2r15
          if($("#dc2r15Check").is(':checked'))
            {
              $('#c2r15').show();
              var n215 = $('#dnc2r15').val();
              var p215 = $('#dpc2r15').val();
              $('#nc2r15').text(n215);
              $('#pc2r15').text("$" + p215);
            }
            else
            {
              $('#c2r15').hide();
            }
            //c3r15
          if($("#dc3r15Check").is(':checked'))
            {
              $('#c3r15').show();
              var n315 = $('#dnc3r15').val();
              var p315 = $('#dpc3r15').val();
              $('#nc3r15').text(n315);
              $('#pc3r15').text("$" + p315);
            }
            else
            {
              $('#c3r15').hide();
            }
            //c4r15
          if($("#dc4r15Check").is(':checked'))
            {
              $('#c4r15').show();
              var n415 = $('#dnc4r15').val();
              var p415 = $('#dpc4r15').val();
              $('#nc4r15').text(n415);
              $('#pc4r15').text("$" + p415);
            }
            else
            {
              $('#c4r15').hide();
            }
            //c1r16
          if($("#dc1r16Check").is(':checked'))
            {
              $('#c1r16').show();
              var n116 = $('#dnc1r16').val();
              var p116 = $('#dpc1r16').val();
              $('#nc1r16').text(n116);
              $('#pc1r16').text("$" + p116);
            }
            else
            {
              $('#c1r16').hide();
            }
            //c2r16
          if($("#dc2r16Check").is(':checked'))
            {
              $('#c2r16').show();
              var n216 = $('#dnc2r16').val();
              var p216 = $('#dpc2r16').val();
              $('#nc2r16').text(n216);
              $('#pc2r16').text("$" + p216);
            }
            else
            {
              $('#c2r16').hide();
            }
            //c3r16
          if($("#dc3r16Check").is(':checked'))
            {
              $('#c3r16').show();
              var n316 = $('#dnc3r16').val();
              var p316 = $('#dpc3r16').val();
              $('#nc3r16').text(n316);
              $('#pc3r16').text("$" + p316);
            }
            else
            {
              $('#c3r16').hide();
            }
            //c4r16
          if($("#dc4r16Check").is(':checked'))
            {
              $('#c4r16').show();
              var n416 = $('#dnc4r16').val();
              var p416 = $('#dpc4r16').val();
              $('#nc4r16').text(n416);
              $('#pc4r16').text("$" + p416);
            }
            else
            {
              $('#c4r16').hide();
            }
            //c1r17
          if($("#dc1r17Check").is(':checked'))
            {
              $('#c1r17').show();
              var n117 = $('#dnc1r17').val();
              var p117 = $('#dpc1r17').val();
              $('#nc1r17').text(n117);
              $('#pc1r17').text("$" + p117);
            }
            else
            {
              $('#c1r17').hide();
            }
            //c2r17
          if($("#dc2r17Check").is(':checked'))
            {
              $('#c2r17').show();
              var n217 = $('#dnc2r17').val();
              var p217 = $('#dpc2r17').val();
              $('#nc2r17').text(n217);
              $('#pc2r17').text("$" + p217);
            }
            else
            {
              $('#c2r17').hide();
            }
            //c3r17
          if($("#dc3r17Check").is(':checked'))
            {
              $('#c3r17').show();
              var n317 = $('#dnc3r17').val();
              var p317 = $('#dpc3r17').val();
              $('#nc3r17').text(n317);
              $('#pc3r17').text("$" + p317);
            }
            else
            {
              $('#c3r17').hide();
            }
            //c4r17
          if($("#dc4r17Check").is(':checked'))
            {
              $('#c4r17').show();
              var n417 = $('#dnc4r17').val();
              var p417 = $('#dpc4r17').val();
              $('#nc4r17').text(n417);
              $('#pc4r17').text("$" + p417);
            }
            else
            {
              $('#c4r17').hide();
            }
            //c1r18
          if($("#dc1r18Check").is(':checked'))
            {
              $('#c1r18').show();
              var n118 = $('#dnc1r18').val();
              var p118 = $('#dpc1r18').val();
              $('#nc1r18').text(n118);
              $('#pc1r18').text("$" + p118);
            }
            else
            {
              $('#c1r18').hide();
            }
            //c2r18
          if($("#dc2r18Check").is(':checked'))
            {
              $('#c2r18').show();
              var n218 = $('#dnc2r18').val();
              var p218 = $('#dpc2r18').val();
              $('#nc2r18').text(n218);
              $('#pc2r18').text("$" + p218);
            }
            else
            {
              $('#c2r18').hide();
            }
            //c3r18
          if($("#dc3r18Check").is(':checked'))
            {
              $('#c3r18').show();
              var n318 = $('#dnc3r18').val();
              var p318 = $('#dpc3r18').val();
              $('#nc3r18').text(n318);
              $('#pc3r18').text("$" + p318);
            }
            else
            {
              $('#c3r18').hide();
            }
            //c4r18
          if($("#dc4r18Check").is(':checked'))
            {
              $('#c4r18').show();
              var n418 = $('#dnc4r18').val();
              var p418 = $('#dpc4r18').val();
              $('#nc4r18').text(n418);
              $('#pc4r18').text("$" + p418);
            }
            else
            {
              $('#c4r18').hide();
            }
            //c1r19
          if($("#dc1r19Check").is(':checked'))
            {
              $('#c1r19').show();
              var n119 = $('#dnc1r19').val();
              var p119 = $('#dpc1r19').val();
              $('#nc1r19').text(n119);
              $('#pc1r19').text("$" + p119);
            }
            else
            {
              $('#c1r19').hide();
            }
            //c2r19
          if($("#dc2r19Check").is(':checked'))
            {
              $('#c2r19').show();
              var n219 = $('#dnc2r19').val();
              var p219 = $('#dpc2r19').val();
              $('#nc2r19').text(n219);
              $('#pc2r19').text("$" + p219);
            }
            else
            {
              $('#c2r19').hide();
            }
            //c3r19
          if($("#dc3r19Check").is(':checked'))
            {
              $('#c3r19').show();
              var n319 = $('#dnc3r19').val();
              var p319 = $('#dpc3r19').val();
              $('#nc3r19').text(n319);
              $('#pc3r19').text("$" + p319);
            }
            else
            {
              $('#c3r19').hide();
            }
            //c4r19
          if($("#dc4r19Check").is(':checked'))
            {
              $('#c4r19').show();
              var n419 = $('#dnc4r19').val();
              var p419 = $('#dpc4r19').val();
              $('#nc4r19').text(n419);
              $('#pc4r19').text("$" + p419);
            }
            else
            {
              $('#c4r19').hide();
            }
            //c1r20
          if($("#dc1r20Check").is(':checked'))
            {
              $('#c1r20').show();
              var n120 = $('#dnc1r20').val();
              var p120 = $('#dpc1r20').val();
              $('#nc1r20').text(n120);
              $('#pc1r20').text("$" + p120);
            }
            else
            {
              $('#c1r20').hide();
            }
            //c2r20
          if($("#dc2r20Check").is(':checked'))
            {
              $('#c2r20').show();
              var n220 = $('#dnc2r20').val();
              var p220 = $('#dpc2r20').val();
              $('#nc2r20').text(n220);
              $('#pc2r20').text("$" + p220);
            }
            else
            {
              $('#c2r20').hide();
            }
            //c3r20
          if($("#dc3r20Check").is(':checked'))
            {
              $('#c3r20').show();
              var n320 = $('#dnc3r20').val();
              var p320 = $('#dpc3r20').val();
              $('#nc3r20').text(n320);
              $('#pc3r20').text("$" + p320);
            }
            else
            {
              $('#c3r20').hide();
            }
            //c4r20
          if($("#dc4r20Check").is(':checked'))
            {
              $('#c4r20').show();
              var n420 = $('#dnc4r20').val();
              var p420 = $('#dpc4r20').val();
              $('#nc4r20').text(n420);
              $('#pc4r20').text("$" + p420);
            }
            else
            {
              $('#c4r20').hide();
            }
        }
        
       
       
       
        
        $(document).on('click', '#print', function () {
        alert("In order to save the tags change the destination to save as pdf from the left of the print settings dialog box which will just be displayed.");
        window.print();
     });
        


  });