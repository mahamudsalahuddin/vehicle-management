# Copyright (c) 2023, salahuddin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class VehiclePrice(Document):
	pass
	# def on_update(Document, handler=None):
	# 	if Document.company_price and Document.customer_price:
	# 		Document.sale_price = Document.company_price + Document.customer_price