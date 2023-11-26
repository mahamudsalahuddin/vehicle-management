import frappe
from frappe.model.document import Document

class TestFilter(Document):
	pass

@frappe.whitelist()
def testFunction(po):
	query = frappe.db.sql(f""" SELECT po.name, po.transaction_date, po.schedule_date, po.total, po.grand_total, poi.item_code, poi.item_name, poi.uom, poi.qty, poi.rate, poi.amount FROM `tabPurchase Order` AS po JOIN `tabPurchase Order Item` AS poi ON poi.parent = po.name WHERE po.name= '{po}' """, as_dict=True)
	return query