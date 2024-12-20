from django.contrib import admin
from .models import BusinessUser, SystemUser

admin.site.register(BusinessUser)
admin.site.register(SystemUser)
