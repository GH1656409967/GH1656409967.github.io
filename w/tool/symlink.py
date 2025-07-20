import os

link_pairs = [
    { "blog": "E:/work/note/content/posts/algo/快速排序.md",        "note": "E:/work/note/content/a/work/algo/basic/快速排序.md"     },
    { "blog": "E:/work/note/content/posts/algo/Bash博弈.md",        "note": "E:/work/note/content/a/work/algo/game/Bash博弈.md"      },
    { "blog": "E:/work/note/content/posts/algo/Fibonacci博弈.md",   "note": "E:/work/note/content/a/work/algo/game/Fibonacci博弈.md" },
    { "blog": "E:/work/note/content/posts/algo/Nim博弈.md",         "note": "E:/work/note/content/a/work/algo/game/Nim博弈.md"       },
    { "blog": "E:/work/note/content/posts/algo/SG函数.md",          "note": "E:/work/note/content/a/work/algo/game/SG函数.md"        },
    { "blog": "E:/work/note/content/posts/algo/Wythoff博弈.md",     "note": "E:/work/note/content/a/work/algo/game/Wythoff博弈.md"   },
    { "blog": "E:/work/note/content/posts/algo/Bellman-Ford.md",    "note": "E:/work/note/content/a/work/algo/graph/Bellman-Ford.md" },
    { "blog": "E:/work/note/content/posts/algo/Dijkstra.md",        "note": "E:/work/note/content/a/work/algo/graph/Dijkstra.md"     },
    { "blog": "E:/work/note/content/posts/algo/Floyd.md",           "note": "E:/work/note/content/a/work/algo/graph/Floyd.md"        },
    { "blog": "E:/work/note/content/posts/algo/Johnson.md",         "note": "E:/work/note/content/a/work/algo/graph/Johnson.md"      },
    { "blog": "E:/work/note/content/posts/algo/KMP.md",             "note": "E:/work/note/content/a/work/algo/string/KMP.md"         },
    { "blog": "E:/work/note/content/posts/algo/Manacher.md",        "note": "E:/work/note/content/a/work/algo/string/Manacher.md"    },
    { "blog": "E:/work/note/content/posts/algo/扩展KMP.md",         "note": "E:/work/note/content/a/work/algo/string/扩展KMP.md"     },
    { "blog": "E:/work/note/content/posts/algo/字典树.md",          "note": "E:/work/note/content/a/work/algo/string/字典树.md"      },
    { "blog": "E:/work/note/content/posts/algo/最小表示法.md",      "note": "E:/work/note/content/a/work/algo/string/最小表示法.md"  },
]

for pair in link_pairs:
    src_path = pair["blog"]
    link_path = pair["note"]

    print(f"\n📄 处理文件: {src_path} → {link_path}")

    # 创建目标目录（如果不存在）
    os.makedirs(os.path.dirname(link_path), exist_ok=True)

    # 检查源文件是否存在
    if not os.path.isfile(src_path):
        print(f"⚠️ 源文件不存在: {src_path}")
        continue

    # 如果符号链接或文件已存在
    if os.path.lexists(link_path):
        if os.path.islink(link_path):
            print(f"🔁 旧符号链接存在，准备删除: {link_path}")
            os.unlink(link_path)  # 删除原有符号链接
        else:
            print(f"⚠️ 已存在同名文件/目录，跳过: {link_path}")
            continue

    # 创建新的符号链接
    try:
        os.symlink(src_path, link_path)
        print(f"✅ 创建软链接: {link_path} → {src_path}")
    except OSError as e:
        print(f"❌ 创建失败: {link_path} → {src_path}，错误: {e}")
