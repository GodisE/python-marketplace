# Generated by Django 3.2.12 on 2023-04-19 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0011_alter_species_table'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='species',
        ),
    ]
