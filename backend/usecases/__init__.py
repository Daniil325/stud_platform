from dishka import Provider, Scope, provide

from .theme import CreateThemeCommand
from .s3 import CreateFileCommand
from .test import CreateTestCommand
from .question import CreateQuestionCommand
from .answer import CreateAnswerCommand


class CommandsProvider(Provider):
    scope = Scope.REQUEST

    create_theme_command = provide(CreateThemeCommand)
    create_file_command = provide(CreateFileCommand)
    create_test_command = provide(CreateTestCommand)
    create_question_command = provide(CreateQuestionCommand)
    create_answer_command = provide(CreateAnswerCommand)
