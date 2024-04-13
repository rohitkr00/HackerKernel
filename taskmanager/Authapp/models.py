from django.db import models

# Create your models here.
class UserDetails(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    phone=models.CharField(max_length=10)

    def __str__(self):
        return self.name
    

class UserTask(models.Model):
    useremail=models.EmailField(max_length=254)
    taskstatus=models.CharField(max_length=254)
    task=models.TextField()
