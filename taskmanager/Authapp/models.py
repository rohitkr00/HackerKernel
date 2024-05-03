from django.db import models

# Create your models here.
class UserDetails(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    phone=models.CharField(max_length=10)

    def __str__(self):
        return self.name
    

class Loandetails(models.Model):
    useremail=models.EmailField(max_length=254)
    time=models.DateField(auto_now=True)
    status = models.CharField(max_length=254)
    term=models.CharField(max_length=254)
    amount=models.IntegerField()
