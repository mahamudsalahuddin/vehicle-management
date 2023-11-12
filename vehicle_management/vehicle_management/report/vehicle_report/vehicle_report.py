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
	for dic_p in parent:
		data.append(dic_p)
		
	return columns, data
	
    
    