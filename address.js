		$(document).ready(function(){
				
				var mp=["indore","bhopal"];
				
				var i;
				var guj=["surat","Ahemdabad"]
		
				$("#states").html("<option value='mp'>mp</option> <option value='guj'>guj</option> ");
				$("#states").change(function(){
						var st=	$("#states option:selected").val();
						var text;
							$("#city").show();
							$("#show").show();
			
							switch(st)
							{
								case "mp": for(i=0;i<mp.length;i++)
											{
												$("#city").html(text=text+"<option value='"+mp[i]+"'>"+mp[i]+"</option> ");

										}
								break;
								case "guj": for(i=0;i<guj.length;i++)
											{$("#city").html(text=text+"<option value='"+guj[i]+"'>"+guj[i]+"</option> ");
										}
								break;

							}

						});
								$("#show").click(function(){
										var st=	$("#states option:selected").val();
										var ct=	$("#city option:selected").val();
										$("#name").html( sessionStorage.getItem("name"));
										$("#lname").html(sessionStorage.getItem("lname"));
										$("#state").html(st);
										$("#ct").html(ct);
										$("#result").show();
									

				});


			});