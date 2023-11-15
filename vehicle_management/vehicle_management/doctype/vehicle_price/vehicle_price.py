# Author: Md Salah Uddin Mahamud
# Date: 15-11-2023
# This is python backend code for vehicle_price doctype of vehicle management ap

import frappe
from frappe.model.document import Document

class VehiclePrice(Document):
	# In validate function I call all the neccessary function created by me
	def validate(self):
		self.cal_sale_price()
		self.cal_amount()
		self.cal_total_amount_total_qty()
		self.cal_grand_total()

	# For calculate sale price
	def cal_sale_price(self):
		if self.company_price and self.customer_price:
			self.sale_price = self.company_price + self.customer_price
	
	# For calculate amount of every row of child table 
	def cal_amount(self):
		for item in self.table:
			item.item_amount = item.item_qty * item.item_rate
	
	# Calculate total amount and total quantity
	def cal_total_amount_total_qty(self):
		total_qty = total_amount = 0
		for item in self.table:
			total_qty += item.item_qty
			total_amount += item.item_amount
		self.total_qty = total_qty
		self.total_amount = total_amount

	# For calculate grand total
	def cal_grand_total(self):
		if self.sale_price and self.total_amount:
			self.grand_total= self.sale_price + self.total_amount


