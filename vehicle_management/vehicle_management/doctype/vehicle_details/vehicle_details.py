import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc


class VehicleDetails(Document):
	pass
@frappe.whitelist()
def VahicleAvailability(source_name,  target_doc=None):
	doc = get_mapped_doc(
		"Vehicle Details",
		source_name, 
		{
		"Vehicle Details": {
			"doctype": "Vehicle Availability",
			"field_map": {
				"chassis_number": "vehicle_chassis_no",
			},
			"validation": {
				"docstatus": ["=", 1]
			}
		},

	}, target_doc)
	return doc

@frappe.whitelist()
def VahiclePrice(source_name,  target_doc=None):
	doc = get_mapped_doc(
		"Vehicle Details",
		source_name, 
		{
		"Vehicle Details": {
			"doctype": "Vehicle Price",
			"field_map": {
				"chassis_number": "vehicle_chassis_no",
			},
			"validation": {
				"docstatus": ["=", 1]
			}
		},

	}, target_doc)
	return doc