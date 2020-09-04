$(function()
  {
    $('#pBody').hide();
    
    $('.c').change(dispExtra);
    
    
    
        $(document).on('click', '#next', function ()
        {
 /*         if($('#n1').val().length > 0 && $('#n2').val().length > 0 && $('#n3').val().length > 0 && $('#n4').val().length > 0)
          {
          if($('#reg1').val().length > 0 && $('#reg2').val().length > 0 && $('#reg3').val().length > 0 && $('#reg4').val().length > 0)
          {
          if($('#sale1').val().length > 0 && $('#sale2').val().length > 0 && $('#sale3').val().length > 0 && $('#sale4').val().length > 0)
          { */


            $('#container').hide();
            $('#pBody').show();
            
            $("#cardF1").text("");
            
            var n1 = $('#n1').val();
            var reg1 = $('#reg1').val();
            var sale1 = $('#sale1').val();           
            var w1 = $('#w1').val();
            var l1 = $('#l1').val();
            var h1 = $('#h1').val();
			
			// for sold item
			var inv1 = $('#inv1').val();
			$("#ScardF1").text("INVOICE NO. " + inv1);
			
            
            var dis1 = $('#dis1').val();  
            var sd = dis1.split('.');
           $("#cardM1").text(sd[0]);
            $("#supM1").text(sd[1]);
            
            $("#cardN1").text(n1);
            
            var ss = sale1.split('.');
           $("#cardS1").text(ss[0]);
            $("#sup1").text(ss[1]);
            
            $("#cardR1").text(reg1);
            
               
            if($("#fc1").is(':checked'))
               {  
                  
                  $("#cardF1").show();
                  $("#cardA1").css({"top" : "418px" });
                  
                    var f1 = $('#f1').val();
                    var arrf1 = f1.split(',');     
               
            for(var p1=0; p1<= 2;p1++)
              {
                if(p1 < arrf1.length)
                       {
                           $("#cardF1").append(arrf1[p1] + "<br />");
                       }
              }
              }
               else
               {
                $("#cardF1").hide();
                $("#cardA1").css({"top" : "362px" });
               
               }
            
            
            if($("#ac1").is(':checked'))
            {
              
              $("#cardA1").show();
              $("#cardF1").css({"top" : "355px" });
              $("#cardFL1").css({"top" : "480px"});
              
              
                var a1 = $('#a1').val();
                var arrA1 = a1.split(',');
                 $("#cardA1").text("");
                 
              for(var x1=0; x1< 2;x1++)
              {
                if(x1 < arrA1.length)
                      {
                          $("#cardA1").append("Available in  " + arrA1[x1] + "<br />");
                      }
              }
              if(arrA1.length < 2)
              {
                $("#cardFL1").css({"top" : "442px"});
              }
            }
            else
            {
              $("#cardA1").hide();
              $("#cardF1").css({"top" : "362px" });
              $("#cardFL1").css({"top" : "435px"});
            }
            
            
            if($("#floorc1").is(':checked'))
            {
               $("#cardFL1").show();
               $("#cardFL1").text("Floor Model As Is");
            }
            else
            {
              $("#cardFL1").text(" ");
            }
         
            if($("#lastc1").is(':checked'))
            {
               $("#cardL1").show();
            }
            else
            {
              $("#cardL1").hide();
            }
            
            if($("#floorc1").is(':checked') && $("#lastc1").is(':checked'))
          {
            $("#cardFL1").css({"left" : "-42px","right" : "45px"});
          }
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     ///////////////////////////For Card 2 ///////////////////////////////////////////////////////////////////////////////////////
     
     
            $("#cardF2").text("");
            
            var n2 = $('#n2').val();
            var reg2 = $('#reg2').val();
            var sale2 = $('#sale2').val();           
            var w2 = $('#w2').val();
            var l2 = $('#l2').val();
            var h2 = $('#h2').val();
            
			// for sold item
			var inv2 = $('#inv2').val();
			$("#ScardF2").text("INVOICE NO. " + inv2);
			
            var dis2 = $('#dis2').val();  
            var sd2 = dis2.split('.');
           $("#cardM2").text(sd2[0]);
            $("#supM2").text(sd2[1]);
            
            $("#cardN2").text(n2);
            
            var ss2 = sale2.split('.');
           $("#cardS2").text(ss2[0]);
            $("#sup2").text(ss2[1]);
            
            $("#cardR2").text(reg2);
            
            
            
            
            //////////////////////////////
            
                   
            if($("#fc2").is(':checked'))
               {
                
                $("#cardF2").show();
                $("#cardA2").css({"top" : "418px" });
                  
                    var f2 = $('#f2').val();
                    var arrf2 = f2.split(',');     
               
            for(var p2=0; p2<= 2;p2++)
              {
                if(p2 < arrf2.length)
                       {
                           $("#cardF2").append(arrf2[p2] + "<br />");
                       }
              }
              }
               else
               {
                $("#cardF2").hide();
                $("#cardA2").css({"top" : "362px" });
               
               }
            
            
            if($("#ac2").is(':checked'))
            {
              
              $("#cardA2").show();
              $("#cardF2").css({"top" : "355px" });
              $("#cardFL2").css({"top" : "480px"});
              
              
                var a2 = $('#a2').val();
                var arrA2 = a2.split(',');
                 $("#cardA2").text("");
                 
              for(var x2=0; x2< 2;x2++)
              {
                if(x2 < arrA2.length)
                      {
                          $("#cardA2").append("Available in  " + arrA2[x2] + "<br />");
                      }
              }
              if(arrA2.length < 2)
              {
                $("#cardFL2").css({"top" : "437px"});
              }
            }
            else
            {
              $("#cardA2").hide();
              $("#cardF2").css({"top" : "362px" });
              $("#cardFL2").css({"top" : "435px"});
            }
            
            
            if($("#floorc2").is(':checked'))
            {
               $("#cardFL2").show();
               $("#cardFL2").text("Floor Model As Is");
            }
            else
            {
              $("#cardFL2").text(" ");
            }
         
            if($("#lastc2").is(':checked'))
            {
               $("#cardL2").show();
            }
            else
            {
              $("#cardL2").hide();
            }
           
            if($("#floorc2").is(':checked') && $("#lastc2").is(':checked'))
          {
            $("#cardFL2").css({"left" : "-42px","right" : "45px"});
          }    
        
         //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     ///////////////////////////For Card 3 ///////////////////////////////////////////////////////////////////////////////////////
     
     
            $("#cardF3").text("");
            
            var n3 = $('#n3').val();
            var reg3= $('#reg3').val();
            var sale3 = $('#sale3').val();           
            var w3 = $('#w3').val();
            var l3 = $('#l3').val();
            var h3 = $('#h3').val();
            
			// for sold item
			var inv3 = $('#inv3').val();
			$("#ScardF3").text("INVOICE NO. " + inv3);
			
            var dis3 = $('#dis3').val();  
            var sd3 = dis3.split('.');
           $("#cardM3").text(sd3[0]);
            $("#supM3").text(sd3[1]);
            
            $("#cardN3").text(n3);
            
            var ss3 = sale3.split('.');
           $("#cardS3").text(ss3[0]);
            $("#sup3").text(ss3[1]);
            
            $("#cardR3").text(reg3);
            
          
            if($("#fc3").is(':checked'))
               {
                
                $("#cardF3").show();
                $("#cardA3").css({"top" : "418px" });
                  
                    var f3 = $('#f3').val();
                    var arrf3 = f3.split(',');     
               
            for(var p3=0; p3<= 2;p3++)
              {
                if(p3 < arrf3.length)
                       {
                           $("#cardF3").append(arrf3[p3] + "<br />");
                       }
              }
              }
               else
               {
                $("#cardF3").hide();
                $("#cardA3").css({"top" : "362px" });
               
               }
            
            
            if($("#ac3").is(':checked'))
            {
              
              $("#cardA3").show();
              $("#cardF3").css({"top" : "355px" });
              $("#cardFL3").css({"top" : "480px"});
              
              
                var a3 = $('#a3').val();
                var arrA3 = a3.split(',');
                 $("#cardA3").text("");
                 
              for(var x3=0; x3< 2;x3++)
              {
                if(x3 < arrA3.length)
                      {
                          $("#cardA3").append("Available in  " + arrA3[x3] + "<br />");
                      }
              }
              if(arrA3.length < 2)
              {
                $("#cardFL3").css({"top" : "437px"});
              }
            }
            else
            {
              $("#cardA3").hide();
              $("#cardF3").css({"top" : "362px" });
              $("#cardFL3").css({"top" : "435px"});
            }
            
            
            if($("#floorc3").is(':checked'))
            {
               $("#cardFL3").show();
               $("#cardFL3").text("Floor Model As Is");
            }
            else
            {
              $("#cardFL3").text(" ");
            }
         
            if($("#lastc3").is(':checked'))
            {
               $("#cardL3").show();
            }
            else
            {
              $("#cardL3").hide();
            }
           
           if($("#floorc3").is(':checked') && $("#lastc3").is(':checked'))
          {
            $("#cardFL3").css({"left" : "-42px","right" : "45px"});
          }
                
         //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     ///////////////////////////For Card 4 ///////////////////////////////////////////////////////////////////////////////////////
     
     
            $("#cardF4").text("");
            
            var n4 = $('#n4').val();
            var reg4= $('#reg4').val();
            var sale4 = $('#sale4').val();           
            var w4 = $('#w4').val();
            var l4 = $('#l4').val();
            var h4 = $('#h4').val();
            
			// for sold item
			var inv4 = $('#inv4').val();
			$("#ScardF4").text("INVOICE NO. " + inv4);
			
            var dis4 = $('#dis4').val();  
            var sd4 = dis4.split('.');
           $("#cardM4").text(sd4[0]);
            $("#supM4").text(sd4[1]);
            
            $("#cardN4").text(n4);
            
            var ss4 = sale4.split('.');
           $("#cardS4").text(ss4[0]);
            $("#sup4").text(ss4[1]);
            
            $("#cardR4").text(reg4);
            
            
     
            if($("#fc4").is(':checked'))
               {  
                  
                $("#cardF4").show();
                $("#cardA4").css({"top" : "418px" });
                  
                  
                    var f4 = $('#f4').val();
                    var arrf4 = f4.split(',');     
               
            for(var p4=0; p4<= 2;p4++)
              {
                if(p4 < arrf4.length)
                       {
                           $("#cardF4").append(arrf4[p4] + "<br />");
                       }
              }
              }
               else
               {
                $("#cardF4").hide();
                $("#cardA4").css({"top" : "362px" });
               
               }
            
            
            if($("#ac4").is(':checked'))
            {
              
              
              $("#cardA4").show();
              $("#cardF4").css({"top" : "355px" });
              $("#cardFL4").css({"top" : "480px"});
              
              
              
                var a4 = $('#a4').val();
                var arrA4 = a4.split(',');
                 $("#cardA4").text("");
                 
              for(var x4=0; x4< 2;x4++)
              {
                if(x4 < arrA4.length)
                      {
                          $("#cardA4").append("Available in  " + arrA4[x4] + "<br />");
                      }
              }
              if(arrA4.length < 2)
              {
                $("#cardFL4").css({"top" : "437px"});
              }
            }
            else
            {
              $("#cardA4").hide();
              $("#cardF4").css({"top" : "362px" });
              $("#cardFL4").css({"top" : "435px"});
            }
            
            
            if($("#floorc4").is(':checked'))
            {
               $("#cardFL4").show();
               $("#cardFL4").text("Floor Model As Is");
            }
            else
            {
              $("#cardFL4").text(" ");
            }
         
            if($("#lastc4").is(':checked'))
            {
               $("#cardL4").show();
            }
            else
            {
              $("#cardL4").hide();
            }
          
          if($("#floorc4").is(':checked') && $("#lastc4").is(':checked'))
          {
            $("#cardFL4").css({"left" : "-42px","right" : "45px"});
          }
          
           ////////////////////////////////////// .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
 if($('#dTypeCm1').is(':checked'))      
        {
             if(h1.length > 0)
            {
                 $("#cardD1").text("Dimensions: " + l1 + "cm X " + w1 + "cm X " + h1 + "cm");
            }
            else
            {
                $("#cardD1").text("Dimensions: " + l1 + "cm X " + w1 + "cm");
            }
        }
          
        else if($('#dTypeInch1').is(':checked'))      
        {
            if(h1.length > 0)
            {
                 $("#cardD1").text("Dimensions: " + l1 + "in X " + w1 + "in X " + h1 + "in");
            }
            else
            {
                $("#cardD1").text("Dimensions: " + l1 + "in X " + w1 + "in");
            }
        }  
          
          
          
        else if($('#dTypeFt1').is(':checked'))      
        {
            if(h1.length > 0)
            {
                 $("#cardD1").text("Dimensions: " + l1 + "ft X " + w1 + "ft X " + h1 + "ft");
            }
            else 
            {
                $("#cardD1").text("Dimensions: " + l1 + "ft X " + w1 + "ft");
            }    
        }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....

 if($('#dTypeCm2').is(':checked'))      
        {
             if(h2.length > 0)
            {
                 $("#cardD2").text("Dimensions: " + l2 + "cm X " + w2 + "cm X " + h2 + "cm");
            }
            else
            {
                $("#cardD2").text("Dimensions: " + l2 + "cm X " + w2 + "cm");
            }
        }
          
        else if($('#dTypeInch2').is(':checked'))      
        {
            if(h2.length > 0)
            {
                 $("#cardD2").text("Dimensions: " + l2 + "in X " + w2 + "in X " + h2 + "in");
            }
            else
            {
                $("#cardD2").text("Dimensions: " + l2 + "in X " + w2 + "in");
            }
        }  
          
          
          
        else if($('#dTypeFt2').is(':checked'))      
        {
            if(h2.length > 0)
            {
                 $("#cardD2").text("Dimensions: " + l2 + "ft X " + w2 + "ft X " + h2 + "ft");
            }
            else 
            {
                $("#cardD2").text("Dimensions: " + l2 + "ft X " + w2 + "ft");
            }    
        }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....

    if($('#dTypeCm3').is(':checked'))      
        {
             if(h3.length > 0)
            {
                 $("#cardD3").text("Dimensions: " + l3 + "cm X " + w3 + "cm X " + h3 + "cm");
            }
            else
            {
                $("#cardD3").text("Dimensions: " + l3 + "cm X " + w3 + "cm");
            }
        }
          
        else if($('#dTypeInch3').is(':checked'))      
        {
            if(h3.length > 0)
            {
                 $("#cardD3").text("Dimensions: " + l3 + "in X " + w3 + "in X " + h3 + "in");
            }
            else
            {
                $("#cardD3").text("Dimensions: " + l3 + "in X " + w3 + "in");
            }
        }  
          
          
          
        else if($('#dTypeFt3').is(':checked'))      
        {
            if(h3.length > 0)
            {
                 $("#cardD3").text("Dimensions: " + l3 + "ft X " + w3 + "ft X " + h3 + "ft");
            }
            else 
            {
                $("#cardD3").text("Dimensions: " + l3 + "ft X " + w3 + "ft");
            }    
        }    

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....
    
       if($('#dTypeCm4').is(':checked'))      
        {
             if(h4.length > 0)
            {
                 $("#cardD4").text("Dimensions: " + l4 + "cm X " + w4 + "cm X " + h4 + "cm");
            }
            else
            {
                $("#cardD4").text("Dimensions: " + l4 + "cm X " + w4 + "cm");
            }
        }
          
        else if($('#dTypeInch4').is(':checked'))      
        {
            if(h4.length > 0)
            {
                 $("#cardD4").text("Dimensions: " + l4 + "in X " + w4 + "in X " + h4 + "in");
            }
            else
            {
                $("#cardD4").text("Dimensions: " + l4 + "in X " + w4 + "in");
            }
        }  
          
          
          
        else if($('#dTypeFt4').is(':checked'))      
        {
            if(h4.length > 0)
            {
                 $("#cardD4").text("Dimensions: " + l4 + "ft X " + w4 + "ft X " + h4 + "ft");
            }
            else 
            {
                $("#cardD4").text("Dimensions: " + l4 + "ft X " + w4 + "ft");
            }    
        }
        
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....
          
          
        /*  }
          else
          {
            alert("You missed an item's Sales price for one of the cards");
          }//sale
          }
          else
          {
            alert("You missed an item's Registered price for one of the cards");
          }//reg
          }
          else
          {
            alert("You missed an item's name for one of the cards");
          }//name      
        
        */
        });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
      $(document).on('click', '#review', function ()
        {
           $('#container').show();
           $('#pBody').hide();
        });
        
    $(document).on('click', '#print', function () {
        alert("In order to save the tags change the destination to save as pdf from the left of the print settings dialog box which will just be displayed.");
        window.print();
     });

   
    
    function dispExtra() {
      
        if($('#ir1').is(':checked'))
          {
            $("#regular1").show();
            $("#discount1").hide();
            $("#cardMM1").hide();
            $("#cut1").hide();
            
            $("#cardRR1").show();
            $("#card1").prop('class','card');
            $("#cardSS1").prop('class','cardS');  $("#sup1").prop('class','ssupp');
            $("#cardRR1").prop('class','cardR');
            $("#cardN1").prop('class','cardN');
            $("#cardD1").prop('class','cardD');
            $("#cardF1").prop('class','cardF');
            $("#cardA1").prop('class','cardA');
            $("#cardFL1").prop('class','cardFL');
			$("#trash1").show();
			$("#soldimg1").hide();
			$("#ScardF1").hide();
			$("#ScardI1").hide();
			$("#acb1").show();
			$("#s1").hide();
      $("#ncut1").hide();
      $("#ncutB1").hide();
      
            $("#floorc1").show();
            $("#lastc1").show();
            $("#fc1").show();
            $("#ac1").show();
            
          }
          //////////////////////////////////////
          
          else if($('#ib1').is(':checked'))
          {
            $("#regular1").show();
            $("#discount1").hide();
            $("#cardMM1").hide();
            $("#cut1").hide();
            $("#ncut1").show();
            $("#cardRR1").show();
            $("#card1").prop('class','Ncard');
            $("#cardSS1").prop('class','NcardS');  $("#sup1").prop('class','Nssupp');
            $("#cardRR1").prop('class','NcardR');
            $("#cardR1").prop('class','NcardRR');
            $("#cardN1").prop('class','NcardN');
            $("#cardD1").prop('class','NcardD');
            $("#cardF1").prop('class','NcardF');
            $("#cardA1").prop('class','NcardA');
            $("#cardA1").hide(); //update L
            $("#cardFL1").hide(); //update L
			$("#trash1").show();
			$("#soldimg1").hide();
			$("#ScardF1").hide();
			$("#ScardI1").hide();
			$("#acb1").hide(); 
			$("#s1").hide();
      $("#ncutB1").hide();
            $("#floorc1").show();
            $("#lastc1").show();
            $("#fc1").show();
            $("#ac1").show();
            
          }
          
                
          //////////////////////////////////////
          
          else if($('#id1').is(':checked'))
          {
            $("#discount1").show();
            $("#cardMM1").show();
            $("#regular1").hide();
            $("#cardRR1").hide();
            $("#cut1").show();
            $("#card1").prop('class','fcard');
            $("#cardSS1").prop('class','fcardS');  $("#sup1").prop('class','supp');
            $("#cardRR1").prop('class','fcardR');
            $("#cardN1").prop('class','fcardN');
            $("#cardD1").prop('class','fcardD');
            $("#cardF1").prop('class','fcardF');
            $("#cardA1").prop('class','fcardA');
            $("#cardFL1").prop('class','fcardFL');
			$("#trash1").show();
			$("#soldimg1").hide();
			$("#ScardF1").hide();
			$("#ScardI1").hide();
			$("#acb1").show();
			$("#s1").hide();
      $("#ncut1").hide();
      $("#ncutB1").hide();
      
      
            $("#floorc1").show();
            $("#lastc1").show();
            $("#fc1").show();
            $("#ac1").show();
		  }
		  // for sold items
		  else if($('#iso1').is(':checked'))
		  {
			$("#regular1").show();
            $("#discount1").hide();
            $("#cardMM1").hide();
            $("#cut1").hide();
            $("#ncutB1").show();
            $("#cardRR1").show();
            $("#card1").prop('class','NcardB');
            $("#cardSS1").prop('class','NcardSB');  $("#sup1").prop('class','NssuppB');
            $("#cardRR1").prop('class','NcardRB');
            $("#cardR1").prop('class','NcardRRB');
            $("#cardN1").prop('class','NcardNB');
            $("#cardD1").prop('class','NcardDB');
            $("#cardF1").hide();
            $("#cardA1").hide(); //update L
            $("#cardFL1").hide(); //update L
            
            $("#floorc1").hide();
            $("#lastc1").hide();
            $("#fc1").hide();
            $("#ac1").hide();
			
      $("#trash1").show();
			$("#soldimg1").hide();
			$("#ScardF1").hide();
			$("#ScardI1").hide();
			$("#acb1").hide(); 
			$("#s1").hide();
		  }
		  else
		{
			$("#card1").prop('class','cardNone');
			$("#acb1").hide();
			$("#cardRR1").hide();
      $("#ncutB1").hide();
		}
	
          
          if($('#ir2').is(':checked'))
          {
            $("#regular2").show();
            $("#discount2").hide();
            $("#cut2").hide();
            $("#cardMM2").hide();
            
            $("#cardRR2").show();
            $("#card2").prop('class','card');
            $("#cardSS2").prop('class','cardS');  $("#sup2").prop('class','ssup');
            $("#cardRR2").prop('class','cardR');
            $("#cardN2").prop('class','cardN');
            $("#cardD2").prop('class','cardD');
            $("#cardF2").prop('class','cardF');
            $("#cardA2").prop('class','cardA');
            $("#cardFL2").prop('class','cardFL');
			$("#trash2").show();
			$("#soldimg2").hide();
			$("#ScardF2").hide();
			$("#ScardI2").hide();
			$("#acb2").show();
			$("#s2").hide();
      $("#ncut2").hide();
      $("#ncutB2").hide();
      $("#floorc2").show();
            $("#lastc2").show();
            $("#fc2").show();
            $("#ac2").show();
          }
          
          
          else if($('#ib2').is(':checked'))
          {
            $("#regular2").show();
            $("#discount2").hide();
            $("#cardMM2").hide();
            $("#cut2").hide();
            $("#ncut2").show();
            $("#cardRR2").show();
            $("#card2").prop('class','Ncard');
            $("#cardSS2").prop('class','NcardS');  $("#sup2").prop('class','Nssupp');
            $("#cardRR2").prop('class','NcardR');
            $("#cardR2").prop('class','NcardRR');
            $("#cardN2").prop('class','NcardN');
            $("#cardD2").prop('class','NcardD');
            $("#cardF2").prop('class','NcardF');
            $("#cardA2").hide(); //update L
            $("#cardFL2").hide(); //update L
            $("#cardA2").prop('class','NcardA');
			$("#trash2").show();
			$("#soldimg2").hide();
			$("#ScardF2").hide();
			$("#ScardI2").hide();
			$("#acb2").hide(); 
			$("#s2").hide();
      $("#ncutB2").hide();
      
      $("#floorc2").show();
            $("#lastc2").show();
            $("#fc2").show();
            $("#ac2").show();
            
          }
          
          
          
          
          else if($('#id2').is(':checked'))
          {
            $("#cardMM2").show();
            $("#discount2").show();
            $("#regular2").hide();
            $("#cardRR2").hide();
            $("#cut2").show();
            $("#card2").prop('class','fcard');
            $("#cardSS2").prop('class','fcardS');  $("#sup2").prop('class','supp');
            $("#cardRR2").prop('class','fcardR');
            $("#cardN2").prop('class','fcardN');
            $("#cardD2").prop('class','fcardD');
            $("#cardF2").prop('class','fcardF');
            $("#cardA2").prop('class','fcardA');
            $("#cardFL2").prop('class','fcardFL');
			$("#trash2").show();
			$("#soldimg2").hide();
			$("#ScardF2").hide();
			$("#ScardI2").hide();
			$("#acb2").show();
			$("#s2").hide();
      $("#ncut2").hide();
      $("#ncutB2").hide();
      
      $("#floorc2").show();
            $("#lastc2").show();
            $("#fc2").show();
            $("#ac2").show();
          }
		 // for sold items
		  else if($('#iso2').is(':checked'))
		  {
			$("#regular2").show();
            $("#discount2").hide();
            $("#cardMM2").hide();
            $("#cut2").hide();
            $("#ncutB2").show();
            $("#cardRR2").show();
            $("#card2").prop('class','NcardB');
            $("#cardSS2").prop('class','NcardSB');  $("#sup2").prop('class','NssuppB');
            $("#cardRR2").prop('class','NcardRB');
            $("#cardR2").prop('class','NcardRRB');
            $("#cardN2").prop('class','NcardNB');
            $("#cardD2").prop('class','NcardDB');
            $("#cardF2").hide();
            $("#cardA2").hide(); //update L
            $("#cardFL2").hide(); //update L
            
            $("#floorc2").hide();
            $("#lastc2").hide();
            $("#fc2").hide();
            $("#ac2").hide();
			
      $("#trash2").show();
			$("#soldimg2").hide();
			$("#ScardF2").hide();
			$("#ScardI2").hide();
			$("#acb2").hide(); 
			$("#s2").hide();
		  } 
		  else
		{
			$("#card2").prop('class','cardNone');
			$("#acb2").hide();
			$("#cardRR2").hide();
      $("#ncutB2").hide();
		}
          
           if($('#ir3').is(':checked'))
          {
            $("#regular3").show();
            $("#discount3").hide();
            $("#cut3").hide();
            $("#cardMM3").hide();
            
            $("#cardRR3").prop('class','cardR');
            $("#cardRR3").show();
            $("#card3").prop('class','card');
            $("#cardSS3").prop('class','cardS');  $("#sup3").prop('class','ssup');
            $("#cardRR3").prop('class','cardR');
            $("#cardN3").prop('class','cardN');
            $("#cardD3").prop('class','cardD');
            $("#cardF3").prop('class','cardF');
            $("#cardA3").prop('class','cardA');
            $("#cardFL3").prop('class','cardFL');
			$("#trash3").show();
			$("#soldimg3").hide();
			$("#ScardF3").hide();
			$("#ScardI3").hide();
			$("#acb3").show();
			$("#s3").hide();
      $("#ncut3").hide();
      $("#ncutB3").hide();
      $("#floorc3").show();
            $("#lastc3").show();
            $("#fc3").show();
            $("#ac3").show();
          }
          
          
          else if($('#ib3').is(':checked'))
          {
            $("#regular3").show();
            $("#discount3").hide();
            $("#cardMM3").hide();
            $("#cut3").hide();
            $("#ncut3").show();
            $("#cardRR3").show();
            $("#card3").prop('class','Ncard');
            $("#cardSS3").prop('class','NcardS');  $("#sup3").prop('class','Nssupp');
            $("#cardRR3").prop('class','NcardR');
            $("#cardR3").prop('class','NcardRR');
            $("#cardN3").prop('class','NcardN');
            $("#cardD3").prop('class','NcardD');
            $("#cardF3").prop('class','NcardF');
            $("#cardA3").hide(); //update L
            $("#cardFL3").hide(); //update L
            $("#cardA3").prop('class','NcardA');
			$("#trash3").show();
			$("#soldimg3").hide();
			$("#ScardF3").hide();
			$("#ScardI3").hide();
			$("#acb3").hide(); 
			$("#s3").hide();
      $("#ncutB3").hide();
      
      $("#floorc3").show();
            $("#lastc3").show();
            $("#fc3").show();
            $("#ac3").show();
            
          }
          
          
          
          
          else if($('#id3').is(':checked'))
          {
            $("#cardMM3").show();
            $("#discount3").show();
            $("#regular3").hide();
            $("#cardRR3").hide();
            $("#cut3").show();
            $("#card3").prop('class','fcard');
            $("#cardSS3").prop('class','fcardS');  $("#sup3").prop('class','supp');
            $("#cardRR3").prop('class','fcardR');
            $("#cardN3").prop('class','fcardN');
            $("#cardD3").prop('class','fcardD');
            $("#cardF3").prop('class','fcardF');
            $("#cardA3").prop('class','fcardA');
            $("#cardFL3").prop('class','fcardFL');
			$("#trash3").show();
			$("#soldimg3").hide();
			$("#ScardF3").hide();
			$("#ScardI3").hide();
			$("#acb3").show();
			$("#s3").hide();
      $("#ncut3").hide();
      $("#ncutB3").hide();
      
      $("#floorc3").show();
            $("#lastc3").show();
            $("#fc3").show();
            $("#ac3").show();
          }
			// for sold items
		  else if($('#iso3').is(':checked'))
		  {
			$("#regular3").show();
            $("#discount3").hide();
            $("#cardMM3").hide();
            $("#cut3").hide();
            $("#ncutB3").show();
            $("#cardRR3").show();
            $("#card3").prop('class','NcardB');
            $("#cardSS3").prop('class','NcardSB');  $("#sup3").prop('class','NssuppB');
            $("#cardRR3").prop('class','NcardRB');
            $("#cardR3").prop('class','NcardRRB');
            $("#cardN3").prop('class','NcardNB');
            $("#cardD3").prop('class','NcardDB');
            $("#cardF3").hide();
            $("#cardA3").hide(); //update L
            $("#cardFL3").hide(); //update L
            
            $("#floorc3").hide();
            $("#lastc3").hide();
            $("#fc3").hide();
            $("#ac3").hide();
			
      $("#trash3").show();
			$("#soldimg3").hide();
			$("#ScardF3").hide();
			$("#ScardI3").hide();
			$("#acb3").hide(); 
			$("#s3").hide();
		  }
		else
		{
			$("#card3").prop('class','cardNone');
			$("#acb3").hide();
			$("#cardRR3").hide();
      $("#ncutB3").hide();
		}
			
           if($('#ir4').is(':checked'))
          {
            $("#regular4").show();
            $("#discount4").hide();
            $("#cut4").hide();
            $("#cardMM4").hide();
            
            $("#cardRR4").show();
            $("#card4").prop('class','card');
            $("#cardSS4").prop('class','cardS');  $("#sup4").prop('class','ssup');
            $("#cardRR4").prop('class','cardR');
            $("#cardN4").prop('class','cardN');
            $("#cardD4").prop('class','cardD');
            $("#cardF4").prop('class','cardF');
            $("#cardA4").prop('class','cardA');
            $("#cardFL4").prop('class','cardFL');
            
			$("#trash4").show();
			$("#soldimg4").hide();
			$("#ScardF4").hide();
			$("#ScardI4").hide();
			$("#acb4").show();
			$("#s4").hide();
      $("#ncut4").hide();
      $("#ncutB4").hide();
      
      $("#floorc4").show();
            $("#lastc4").show();
            $("#fc4").show();
            $("#ac4").show();
          }
          
          
          else if($('#ib4').is(':checked'))
          {
            $("#regular4").show();
            $("#discount4").hide();
            $("#cardMM4").hide();
            $("#cut4").hide();
            $("#ncut4").show();
            $("#cardRR4").show();
            $("#card4").prop('class','Ncard');
            $("#cardSS4").prop('class','NcardS');  $("#sup4").prop('class','Nssupp');
            $("#cardRR4").prop('class','NcardR');
            $("#cardR4").prop('class','NcardRR');
            $("#cardN4").prop('class','NcardN');
            $("#cardD4").prop('class','NcardD');
            $("#cardF4").prop('class','NcardF');
            $("#cardA4").hide(); //update L
            $("#cardFL4").hide(); //update L
            $("#cardA4").prop('class','NcardA');
			$("#trash4").show();
			$("#soldimg4").hide();
			$("#ScardF4").hide();
			$("#ScardI4").hide();
			$("#acb4").hide(); 
			$("#s4").hide();
      $("#ncutB4").hide();
      
      $("#floorc4").show();
            $("#lastc4").show();
            $("#fc4").show();
            $("#ac4").show();
            
          }
          
          
          
          
          else if($('#id4').is(':checked'))
          {
            $("#cardMM4").show();
            $("#discount4").show();
            $("#regular4").hide();
            $("#cardRR4").hide();
            $("#cut4").show();
            $("#card4").prop('class','fcard');
            $("#cardSS4").prop('class','fcardS');  $("#sup4").prop('class','supp');
            $("#cardRR4").prop('class','fcardR');
            $("#cardN4").prop('class','fcardN');
            $("#cardD4").prop('class','fcardD');
            $("#cardF4").prop('class','fcardF');
            $("#cardA4").prop('class','fcardA');
            $("#cardFL4").prop('class','fcardFL');
			$("#trash4").show();
			$("#soldimg4").hide();
			$("#ScardF4").hide();
			$("#ScardI4").hide();
			$("#acb4").show();
			$("#s4").hide();
      $("#ncut4").hide();
      $("#ncutB4").hide();
      
      $("#floorc4").show();
            $("#lastc4").show();
            $("#fc4").show();
            $("#ac4").show();
      
          }
		  // for Floor items
		  else if($('#iso4').is(':checked'))
		  {
        $("#regular4").show();
            $("#discount4").hide();
            $("#cardMM4").hide();
            $("#cut4").hide();
            $("#ncutB4").show();
            $("#cardRR4").show();
            $("#card4").prop('class','NcardB');
            $("#cardSS4").prop('class','NcardSB');  $("#sup4").prop('class','NssuppB');
            $("#cardRR4").prop('class','NcardRB');
            $("#cardR4").prop('class','NcardRRB');
            $("#cardN4").prop('class','NcardNB');
            $("#cardD4").prop('class','NcardDB');
            $("#cardF4").hide();
            $("#cardA4").hide(); //update L
            $("#cardFL4").hide(); //update L
            
            $("#floorc4").hide();
            $("#lastc4").hide();
            $("#fc4").hide();
            $("#ac4").hide();
			
      $("#trash4").show();
			$("#soldimg4").hide();
			$("#ScardF4").hide();
			$("#ScardI4").hide();
			$("#acb4").hide(); 
			$("#s4").hide();
		  }
      
      
		  else
		{
			$("#card4").prop('class','cardNone');
			$("#acb4").hide();
			$("#cardRR4").hide();
      $("#ncutB4").hide();
		}
      
        if($('#fc1').is(':checked')){
           $('#f1').show();
        }
        else
             $('#f1').hide();
             
         if($('#fc2').is(':checked')){
           $('#f2').show();
        }
        else
             $('#f2').hide();
             
         if($('#fc3').is(':checked')){
           $('#f3').show();
        }
        else
             $('#f3').hide();
             
         if($('#fc4').is(':checked')){
           $('#f4').show();
        }
        else
             $('#f4').hide();
             
        
        ///////////
        
        if($('#ac1').is(':checked')){
           $('#a1').show();
        }
        else
             $('#a1').hide();
             
         if($('#ac2').is(':checked')){
           $('#a2').show();
        }
        else
             $('#a2').hide();
             
         if($('#ac3').is(':checked')){
           $('#a3').show();
        }
        else
             $('#a3').hide();
             
         if($('#ac4').is(':checked')){
           $('#a4').show();
        }
        else
             $('#a4').hide();
        }
  });