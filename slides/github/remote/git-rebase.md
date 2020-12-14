`git rebase [remote]/[branch]` incorporate<br/>changes
that you don't have

<small>**don't** miss the `/`</small>

Note:
- why would you **not** use a merge to do this?
- rebase does not make a new commit
- bad idea to merge back into your same branch
    - makes your history ugly and hard to read
    - **will** frustrate you
- `git fetch` **first**
