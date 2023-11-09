import frappe
def execute(filters=None):
	columns = [
		{'fieldname':'chassis_no','label':'Chassis No'},
		{'fieldname':'car_model','label':'Car model'},
		{'fieldname':'model_year','label':'Model Year'},
		{'fieldname':'shape','label':'Shape'},
		{'fieldname':'auction_grade','label':'Auction Grade'},
		{'fieldname':'package','label':'Package'},
		{'fieldname':'color','label':'Color'},
		{'fieldname':'milage','label':'Milage'},
		{'fieldname':'cc','label':'CC'},
		{'fieldname':'seat_capacity','label':'Seat Capacity'},
		{'fieldname':'origin_country','label':'Origin Country'},
		# {'fieldname':'status','label':'Vehicle status'},
		{'fieldname':'sale_price','label':'Sale Price'},
		{'fieldname':'grand_total','label':'Grand Total'},
	]
	data = []
	parent = frappe.db.sql("SELECT vd.chassis_number, vd.car_model, vd.model_year, vd.shape, vd.auction_grade, vd.package, vd.color, vd.milage, vd.cc, vd.seat_capacity, vd.origin_country, vp.sale_price, vp.grand_total FROM `tabVehicle Details` AS vd JOIN `tabVehicle Price` AS vp ON vd.chassis_number = vp.vehicle_chassis_no ")
	# parent = frappe.db.sql("SELECT vd.chassis_number, vd.car_model, vd.model_year, vd.shape, vd.auction_grade, vd.package, vd.color, vd.milage, vd.cc, vd.seat_capacity, vd.origin_country, va.status, vp.sale_price, vp.grand_total FROM `tabVehicle Details` as vd JOIN `tabVehicle Availability` as va ON vd.chassis_number = va.vehicle_chassis_no JOIN `tabVehicle Price` AS vp ON vd.chassis_number = vp.vehicle_chassis_no")
	# parent = frappe.db.sql("SELECT vd.origin_country, va.status, vp.sale_price FROM `tabVehicle Details` vd  `tabVehicle Availability` va `tabVehicle Price` vp WHERE vd.chassis_number = va.vehicle_chassis_no AND vd.chassis_number = vp.vehicle_chassis_no")
	for dic_p in parent:
		# dic_p["indent"] = 0
		data.append(dic_p)
		# child = frappe.db.sql("SELECT subject, status, creation FROM `tabActivity Log` WHERE user = '" + dic_p["name"] + "'", as_dict=1)
		# for dic_c in child:
		# 	dic_c["indent"] = 1
		# 	data.append(dic_c)
	return columns, data
	
    
    