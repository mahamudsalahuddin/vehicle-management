from erpnext.stock.doctype.material_request.material_request import MaterialRequest
from frappe.utils import money_in_words


class MaterialRequestController(MaterialRequest):
    def validate(self):
        super(MaterialRequestController, self).validate()
        value = self.custom_total
        words = money_in_words(value) # 'INR Nine Hundred and Fifty Paisa only.'
        self.custom_in_words = words
        # money_in_words(900.50) # 'INR Nine Hundred and Fifty Paisa only.'
        # money_in_words(900.50, 'USD') # 'USD Nine Hundred and Fifty Centavo only.'
        # money_in_words(900.50, 'USD', 'Cents') # 
        print("==============================================")
        print(words)
    