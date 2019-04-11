$(function () {
	var wcycomboanimation = $(".wcy_combo_animation")
	console.log(wcycomboanimation)
	// wcycomboanimation.eq(0).animate({top:"0px"},500,function () {
	// 	wcycomboanimation.eq(5).animate({top:"0px"},500,function () {
	// 		wcycomboanimation.eq(1).animate({top:"0px"},500,function () {
	// 			wcycomboanimation.eq(4).animate({top:"0px"},500,function () {
	// 				wcycomboanimation.eq(2).animate({top:"0px"},500,function () {
	// 					wcycomboanimation.eq(3).animate({top:"0px"},500,function () {

	// 					})
	// 				})
	// 			})
	// 		})
	// 	})
	//  })
	var time = "";
	var n = 0
	clearInterval(time)
	time = setInterval(function () {
		wcycomboanimation.eq(0).animate({ top: "0px" }, 500)
	}, 500)
	time = setInterval(function () {
		wcycomboanimation.eq(1).animate({ top: "0px" }, 500)
	}, 700)
	time = setInterval(function () {
		wcycomboanimation.eq(2).animate({ top: "0px" }, 500)
	}, 900)
	time = setInterval(function () {
		wcycomboanimation.eq(3).animate({ top: "0px" }, 500)
	}, 1100)
	time = setInterval(function () {
		wcycomboanimation.eq(4).animate({ top: "0px" }, 500)
	}, 1300)
	time = setInterval(function () {
		wcycomboanimation.eq(5).animate({ top: "0px" }, 500)
	}, 1500)
	var baokpackagebox = $(".baok_package_box")
	var time1 = ""
	clearInterval(time1)
	time1 = setInterval(function () {
		baokpackagebox.eq(0).animate({ left: "0", opacity: '1' }, 500, function () {
			baokpackagebox.eq(1).animate({ left: "0", opacity: '1' }, 500, function () {
				baokpackagebox.eq(2).animate({ left: "0", opacity: '1' }, 500, function () {
					baokpackagebox.eq(3).animate({ left: "0", opacity: '1' }, 500, function () {
						baokpackagebox.eq(4).animate({ left: "0", opacity: '1' }, 500, function () {
							baokpackagebox.eq(5).animate({ left: "0", opacity: '1' }, 500, function () {
								baokpackagebox.eq(6).animate({ left: "0", opacity: '1' }, 500, function () {

								})
							})
						})
					})
				})
			})
		})
	})
var presentationleft  = $(".presentation_left ")
var presentationleftimg =  presentationleft.find("img")
var presentationright = $(".presentation_right")
var presentationrightcontent =  presentationright.find(".presentation_right_content")

presentationleftimg.animate({left:"300px"},1000)
presentationrightcontent.animate({right:"300px"},1000)
})
