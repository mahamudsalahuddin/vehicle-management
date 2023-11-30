# Copyright (c) 2023, salahuddin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class VehicleDetails(Document):
	pass


@frappe.whitelist
def VehicleDetailsFunction():
	from frappe.model.mapper import get_mapped_doc
	doclist = get_mapped_doc(
		"Vehicle Details",
		{
			"Vehicle Details": {"doctype": "Vehicle Details", "validation": {"docstatus": ["=", 1]}},
			"Vehicle Availability": {
				"doctype": "Vehicle Availability",
				"field_map": {
					"chassis_number": "vehicle_chassis_no",
				},
			},
		}
	)
	return doclist