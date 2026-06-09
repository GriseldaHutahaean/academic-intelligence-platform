import pandas as pd

df = pd.read_csv('Data/dataset.csv')

print(f"Total Records: {len(df)}")
print(f"Total Features: {len(df.columns)}\n")

print("Target Distribution:")
print(df['Target'].value_counts())
print(f"\nScholarship Distribution:")
print(df['Scholarship holder'].value_counts())
print(f"\nDebtor Status:")
print(df['Debtor'].value_counts())
print(f"\nTuition Fees Status:")
print(df['Tuition fees up to date'].value_counts())
print(f"\nGender Distribution:")
print(df['Gender'].value_counts())
print(f"\nAge at Enrollment: Mean={df['Age at enrollment'].mean():.1f}, Min={df['Age at enrollment'].min()}, Max={df['Age at enrollment'].max()}")
