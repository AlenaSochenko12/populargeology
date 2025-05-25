from django.db import models

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)
    class Meta:
        managed = False
        db_table = 'auth_group'

class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)
    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)

class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)

class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)
    class Meta:
        managed = False
        db_table = 'auth_user'

class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)

class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)
    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)

class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'django_admin_log'

class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)

class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'django_migrations'

class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'django_session'

class Article(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.CharField(max_length=100, blank=True, null=True)
    text = models.TextField()
    src_article = models.CharField(max_length=100)
    src_magazine = models.CharField(max_length=500)
    time = models.CharField(max_length=13)
    class Meta:
        managed = False
        db_table = 'portal_api_article'
    def __str__(self):
        return self.title

class Location(models.Model):
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255, blank=True, null=True)
    time = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'portal_api_location'
    def __str__(self):
        return self.title

class Video(models.Model):
    time_ago = models.CharField(max_length=100)
    video = models.CharField(max_length=255)
    time = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'portal_api_video'
    def __str__(self):
        return self.video

class Exhibit(models.Model):
    title = models.CharField(max_length=255)
    time_ago = models.CharField(max_length=100)
    image = models.CharField(max_length=255, blank=True, null=True)
    text = models.TextField()
    time = models.CharField(max_length=100)
    src_article = models.CharField(max_length=255, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'portal_api_exhibit'
    def __str__(self):
        return self.title

class Earth(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    text_more = models.TextField(blank=True, null=True)
    ambientMap = models.CharField(max_length=255, blank=True, null=True)
    baseMap = models.CharField(max_length=255, blank=True, null=True)
    heightMap = models.CharField(max_length=255, blank=True, null=True)
    metallicMap = models.CharField(max_length=255, blank=True, null=True)
    normalMap = models.CharField(max_length=255, blank=True, null=True)
    roughnessMap = models.CharField(max_length=255, blank=True, null=True)
    cloudMap = models.CharField(max_length=255, blank=True, null=True)
    image_more = models.CharField(max_length=255, blank=True, null=True)
    src_article = models.CharField(max_length=255, blank=True, null=True)
    src_magazine = models.CharField(max_length=255, blank=True, null=True)
    time = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'portal_api_earth'
    def __str__(self):
        return self.title

class Reconstruction(models.Model):
    title = models.CharField(max_length=255)
    time_ago = models.CharField(max_length=100)
    text = models.TextField()
    image = models.CharField(max_length=255, blank=True, null=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, db_column='location_id')
    coordinates = models.CharField(max_length=255, blank=True, null=True)
    position = models.CharField(max_length=255, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'portal_api_reconstruction'
    def __str__(self):
        return self.title