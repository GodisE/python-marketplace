# Generated by Django 3.2.12 on 2023-04-18 00:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='type',
            table='item_type',
        ),
    ]
