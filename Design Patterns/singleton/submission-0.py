class Singleton:
    __unique_instance = None
    # In python consider this method as the 'getInstance'
    def __new__(cls):
        if cls.__unique_instance is None:
            cls.__unique_instance = super(Singleton, cls).__new__(cls)
        return cls.__unique_instance
    def getValue(self) -> str:
        return self.value
    def setValue(self, value: str):
        self.value = value
