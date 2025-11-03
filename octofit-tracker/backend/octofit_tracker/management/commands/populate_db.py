from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Apaga dados antigos
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Times
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Usuários super-heróis
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Atividades
        Activity.objects.create(user=users[0], type='Run', duration=30)
        Activity.objects.create(user=users[1], type='Swim', duration=45)
        Activity.objects.create(user=users[2], type='Bike', duration=60)
        Activity.objects.create(user=users[3], type='Yoga', duration=20)

        # Workouts
        Workout.objects.create(name='Hero HIIT', description='High intensity for heroes')
        Workout.objects.create(name='Power Yoga', description='Yoga for super strength')

        # Leaderboard
        Leaderboard.objects.create(user=users[0], points=100)
        Leaderboard.objects.create(user=users[1], points=90)
        Leaderboard.objects.create(user=users[2], points=95)
        Leaderboard.objects.create(user=users[3], points=85)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data!'))
